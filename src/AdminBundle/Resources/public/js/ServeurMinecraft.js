JoueurChart = function () {
    var oJoueurChart = null;
    var iMaxJoueur = 10;
    var inbJoueur = 7;
    var eJoueurChart = $("#joueurChart");
    this.init = function () {
        this.updateChart();
    };
    this.setiMaxJoueur = function (iMaxJoueur) {
        this.iMaxJoueur = iMaxJoueur;
        this.updateChart();
    };
    this.setinbJoueur = function (inbJoueur) {
        this.inbJoueur = inbJoueur;
        this.updateChart();
    };
    this.updateChart = function () {
        var data = {
            labels: ["Joueur connecté", "Place libre"],
            datasets: [{
                data: [inbJoueur, iMaxJoueur - inbJoueur,],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(160,160, 160, 0.5)',

                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        };
        var options = {};
        if (oJoueurChart === null) {
            oJoueurChart = new Chart(eJoueurChart, {
                type: 'doughnut',
                data: data,
                options: options
            })
        } else {
            oJoueurChart.update();
        }
    };
};
MapChart = function () {
    var oMapChart = null;
    var iTailleMax = 10;
    var iTailleCourante = 7;
    var eMapChart = $("#mapChart");
    this.init = function () {
        this.updateChart();
    };
    this.setiTailleMax = function (iTailleMax) {
        this.iTailleMax = iTailleMax;
        this.updateChart();
    };
    this.setiTailleCourante = function (iTailleCourante) {
        this.iTailleCourante = iTailleCourante;
        this.updateChart();
    };
    this.updateChart = function () {
        var data = {
            labels: ["Espace utilisé", "Espace libre"],
            datasets: [{
                data: [iTailleCourante, iTailleMax - iTailleCourante,],
                backgroundColor: [
                    'rgba(91, 60, 17, 0.8)',
                    'rgba(52,201, 36, 0.9)',

                ],
                borderColor: [
                    'rgba(91, 60, 17, 1)',
                    'rgba(52,201, 36, 1)'
                ],
                borderWidth: 1
            }]
        };
        var options = {};
        if (oMapChart === null) {
            oMapChart = new Chart(eMapChart, {
                type: 'doughnut',
                data: data,
                options: options
            })
        } else {
            oMapChart.update();
        }
    };
};
MemoireChart = function () {
    var oMemoireChart = null;
    var iMemoireMax = 756;
    var iMemoireUtilise = 500;
    var eMemoireChart = $("#memoireChart");
    this.init = function () {
        this.updateChart();
    };
    this.setMemoireMax = function (iMemoireMax) {
        this.iMemoireMax = iMemoireMax;
        this.updateChart();
    };
    this.setMemoireUtilise = function (iMemoireUtilise) {
        this.iMemoireUtilise = iMemoireUtilise;
        this.updateChart();
    };
    this.updateChart = function () {
        var data = {
            labels: ["Utilisée", "Libre"],
            datasets: [{
                data: [iMemoireUtilise, iMemoireMax],
                backgroundColor: [
                    'rgba(52,201, 36, 0.9)',
                    'rgba(160,160, 160, 0.5)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        };
        var options = {};
        if (oMemoireChart === null) {
            oMemoireChart = new Chart(eMemoireChart, {
                type: 'doughnut',
                data: data,
                options: options
            })
        } else {
            oMemoireChart.update();
        }
    };
};

BtnServeur = function () {
    var COMMANDE_START_SERVEUR = '{"startServeur" : true}';
    var COMMANDE_STOP_SERVEUR = '{"stopServeur" : true}';
    var COMMANDE_RESTART_SERVEUR = '{"restartServeur" : true}';
    var oChargementLayout = null;
    var sToken = null;
    this.init = function () {
        var localThis = this;
        $('#btnStartServeur').click(function () {
            bootbox.confirm("Voullez-vous vraiment demarrer le serveur ?", function () {
                localThis.envoyerCommande(COMMANDE_START_SERVEUR);
                oChargementLayout = new Chargement().init("#chargementModal", "Démarrage du serveur", 2, "Démarrage du serveur");
            });
        });
        $('#btnStopServeur').click(function () {
            localThis.envoyerCommande(COMMANDE_STOP_SERVEUR);
        });
        $('#btnRestartServeur').click(function () {
            localThis.envoyerCommande(COMMANDE_RESTART_SERVEUR);
        });

    };
    this.envoyerCommande = function (sCommande) {
        var message = new Paho.MQTT.Message(sCommande);
        clientMqtt.send(message);

        alert("Commande envoyer");
    };

};

/**
 *
 */
function initMqtt() {
    sToken = Math.random().toString(36).substr(2);
    // Create a client instance: Broker, Port, Websocket Path, Client ID
    clientMqtt = new Paho.MQTT.Client("m23.cloudmqtt.com", Number(36218), "/minecraftadmin", sToken);

// set callback handlers
    clientMqtt.onConnectionLost = function (responseObject) {
        console.log("Connection Lost: " + responseObject.errorMessage);
    };

    clientMqtt.onMessageArrived = function (message) {
        console.log("Message Arrived: " + message.payloadString);
        $("#donneesTempsReel").append(message.payloadString + "<br />");
    };

// Called when the connection is made
    function onConnect() {
        console.log("Connected! inscription au topic : " + sToken);
        clientMqtt.subscribe(sToken);
    }

// Connect the client, providing an onConnect callback
    clientMqtt.connect({
        useSSL: true,
        userName: "ghyzkrlm",
        password: "XvLXyqgvcDSQ",
        onSuccess: onConnect
    });
}

var oJoueurChart = new JoueurChart();
var oMemoireChart = new MemoireChart();
var oMapChart = new MapChart();
var oBtnServeur = new BtnServeur();
var clientMqtt = null;
$(document).ready(function () {
    oMemoireChart.init();
    oJoueurChart.init();
    oMapChart.init();
    oBtnServeur.init();
    initMqtt();
});

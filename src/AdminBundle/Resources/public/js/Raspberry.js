CpuChart = function () {
    var oCpuChart = null;
    var iMax = 100;
    var iCourante = 26;
    var eCpuChart = $("#cpuChart");
    this.init = function () {
        this.updateChart();
    };

    this.iCourante = function (iCourante) {
        this.iCourante = iCourante;
        this.updateChart();
    };
    this.updateChart = function () {
        var data = {
            labels: ["Utilisé", "Libre"],
            datasets: [{
                data: [iCourante, iMax - iCourante],
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
        if (oCpuChart === null) {
            oCpuChart = new Chart(eCpuChart, {
                type: 'doughnut',
                data: data,
                options: options
            })
        } else {
            oCpuChart.update();
        }
    };
};
DisqueChart = function () {
    var oDisqueChart = null;
    var iTailleMax = 10;
    var iTailleCourante = 7;
    var eDisqueChart = $("#disqueChart");
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
        if (oDisqueChart === null) {
            oDisqueChart = new Chart(eDisqueChart, {
                type: 'doughnut',
                data: data,
                options: options
            })
        } else {
            oDisqueChart.update();
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
NetworkChart = function () {
    var oNetworkChart = null;
    var iMax = 100;
    var iCourant = 50;
    var eMetworkChart = $("#networkChart");
    this.init = function () {
        this.updateChart();
    };
    this.setiMax = function (iMax) {
        this.iMax = iMax;
        this.updateChart();
    };
    this.setiCourant = function (iCourant) {
        this.iCourant = iCourant;
        this.updateChart();
    };
    this.updateChart = function () {
        var data = {
            labels: ["Utilisée", "Libre"],
            datasets: [{
                data: [iCourant, iMax],
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
        if (oNetworkChart === null) {
            oNetworkChart = new Chart(eMetworkChart, {
                type: 'doughnut',
                data: data,
                options: options
            })
        } else {
            oNetworkChart.update();
        }
    };
};
var oCpuChart = new CpuChart();
var oMemoireChart = new MemoireChart();
var oDisqueChart = new DisqueChart();
var oNetworkChart = new NetworkChart();

$(document).ready(function () {
    oMemoireChart.init();
    oCpuChart.init();
    oDisqueChart.init();
    oNetworkChart.init();
});

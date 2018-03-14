Chargement = function () {
    var eChargement = null;
    var eProgress = null;
    var eEtape = "";
    var sMessage = "";
    var iMaxEtape = 0;
    var iEtape = 0;
    var sEtape = "";

    this.init = function (eChargement, sMessage, imax, sEtape) {
        this.eChargement = eChargement;
        this.sMessage = sMessage;
        this.imax = imax;
        $(eChargement).find("#messageChargement").text(sMessage);
        eProgress = $(eChargement).find("#progressChargement");
        $(eProgress).attr('aria-valuemax', imax);
        $(eProgress).attr('aria-valuemin', 0);
        $(eProgress).attr('aria-valuenow', 0);
        $('.progress-bar').css('width', 0 + '%');

        eEtape = $(eChargement).find("#etapeChargement");
        $(eChargement).modal({
            'show': true,
            'backdrop': 'static',
            'keyboard': false
        });
    };
    this.updateProgress = function (iProgress, sEtape) {
        $(eProgress).prop('aria-valuenow', iProgress);
        $('.progress-bar').css('width', iProgress / iMaxEtape * 100 + '%');
        if (sEtape !== null && sEtape !== "") {
            this.sEtape = sEtape;
            eEtape.text(this.sEtape);
        }
    };
    this.hide = function () {
        $(eProgress).modal('hide');
    };
};

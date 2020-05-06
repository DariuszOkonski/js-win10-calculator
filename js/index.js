class Calculator {
    constructor(){
        this.dataMobileHistory = null;

        this.uiElements = {
            dataBtnHistoryMobile: '[data-btn-history-mobile]',
            dataMobileHistory: '[data-mobile-history]',
        }
    
    }

    initialization() {
        this.dataMobileHistory = document.querySelector(this.uiElements.dataMobileHistory);

        this.addEventListeners();
    }

    addEventListeners() {
        document.querySelector(this.uiElements.dataBtnHistoryMobile).addEventListener('click', this.toggleDataMobileHistory);
    }

    toggleDataMobileHistory = (e) => {
        this.dataMobileHistory.classList.toggle('active');
    }
}
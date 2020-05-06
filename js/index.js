class Calculator {
    constructor(){
        this.dataMobileHistory = null;
        this.dataMemoryButtons = null;


        this.uiElements = {
            dataBtnHistoryMobile: '[data-btn-history-mobile]',
            dataMobileHistory: '[data-mobile-history]',
            dataMemoryButtons:  '[data-memory-buttons]'
        }
    
    }

    initialization() {
        this.dataMobileHistory = document.querySelector(this.uiElements.dataMobileHistory);
        this.dataMemoryButtons = document.querySelector(this.uiElements.dataMemoryButtons);

        this.addEventListeners();
    }

    addEventListeners() {
        document.querySelector(this.uiElements.dataBtnHistoryMobile).addEventListener('click', this.toggleDataMobileHistory);
    }

    toggleDataMobileHistory = (e) => {
        this.dataMobileHistory.classList.toggle('active');
        this.dataMemoryButtons.classList.toggle('active');
    }
}
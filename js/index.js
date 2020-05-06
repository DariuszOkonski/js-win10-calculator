class Calculator {
    constructor(){
        this.currentNumber = "0";
        
        this.dataMobileHistory = null;
        this.dataMemoryButtons = null;
        this.dataMemorySingleButton = null;
        this.dataNumbericBtns = null;
        this.dataDisplayCurrentNumber = null;
        this.dataClearCurrentNumber = null;

        this.uiElements = {
            dataBtnHistoryMobile: '[data-btn-history-mobile]',
            dataMobileHistory: '[data-mobile-history]',
            dataMemoryButtons:  '[data-memory-buttons]',
            dataMemorySingleButton: '[data-memory-single-button]',
            dataNumbericBtns: '[data-numeric-btns]',
            dataDisplayCurrentNumber: '[data-display-current-number]',
            dataClearCurrentNumber: '[data-clear-current-number]',
        }
    
    }

    initialization() {
        this.dataMobileHistory = document.querySelector(this.uiElements.dataMobileHistory);
        this.dataMemoryButtons = document.querySelector(this.uiElements.dataMemoryButtons);
        this.dataMemorySingleButton = document.querySelectorAll(this.uiElements.dataMemorySingleButton);
        this.dataNumbericBtns = document.querySelectorAll(this.uiElements.dataNumbericBtns);
        this.dataDisplayCurrentNumber = document.querySelector(this.uiElements.dataDisplayCurrentNumber);
        this.dataClearCurrentNumber = document.querySelector(this.uiElements.dataClearCurrentNumber);
        this.addEventListeners();
    }

    addEventListeners() {
        document.querySelector(this.uiElements.dataBtnHistoryMobile).addEventListener('click', this.toggleDataMobileHistory);
        this.dataClearCurrentNumber.addEventListener('click', this.clearCurrentNumber);
        
        this.dataMemorySingleButton.forEach(singleButton => singleButton.addEventListener('click', this.dataMemorySingleButtonClick));
        this.dataNumbericBtns.forEach(singleButton => singleButton.addEventListener('click', this.dataNumbericBtnsClick));

    }

    clearCurrentNumber = () => {
        this.currentNumber = "0";
        this.displayCurrentNumber(this.currentNumber);
    }

    displayCurrentNumber = (number) => {
        this.dataDisplayCurrentNumber.innerText = this.numberWithCommas(number);
    }

    dataNumbericBtnsClick = (e) => {
        
        if(this.currentNumber === "0") {
            this.currentNumber = e.target.dataset.numericBtns;
            this.displayCurrentNumber(this.currentNumber);
            return;
        }
        
        if(this.currentNumber.length >= 10)
            return;

        this.currentNumber += e.target.dataset.numericBtns;
        this.displayCurrentNumber(this.currentNumber);
    }

    dataMemorySingleButtonClick = (e) => {
        console.log(e.target)
        console.log('data memory single button click');
    }

    toggleDataMobileHistory = (e) => {
        this.dataMobileHistory.classList.toggle('active');
        this.dataMemoryButtons.classList.toggle('active');
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
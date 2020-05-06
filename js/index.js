class Calculator {
    constructor() {
        this.currentNumber = "0";

        // references to ui elements apart from buttons
        this.screen = null;
        this.mobileHistory = null;
        //TODO => NO BUTTONS REFERENCES

        // uielements identifications
        this.uiElements = {
            btnHistoryMobile: '[data-btn-histor-mobile]',
            btnNumbers: '[data-btn-numbers]',
            screen: '[data-screen]',
            mobileHistory: '[data-mobile-history]',
        }

        this.initialization();
    }

    initialization = () => {
        //TODO => NO BUTTONS HERE
        this.screen = document.querySelector(this.uiElements.screen);
        this.mobileHistory = document.querySelector(this.uiElements.mobileHistory);

        this.addButtonsEventListener();
    }

    addButtonsEventListener = () => {
        // single buttons
        document.querySelector(this.uiElements.btnHistoryMobile).addEventListener('click', this.btnHistoryMobileClick);

        // many buttons
        document.querySelectorAll(this.uiElements.btnNumbers).forEach(btn => btn.addEventListener('click', this.btnNumbersClick));
    }

    // private methods ===============================================================================
    btnNumbersClick = (e) => {
        if(this.currentNumber[0] == 0 && e.target.dataset.btnNumbers == 0)
            return;

        this.addToCurrentNumber(e.target.dataset.btnNumbers);
        console.log(this.currentNumber)
    }

    btnHistoryMobileClick = () => {
        this.screen.classList.toggle('screen-cover');
        this.mobileHistory.classList.toggle('show');
    }

    addToCurrentNumber = (value) => {
        if(this.currentNumber[0] === "0") {
            this.currentNumber = value;
            return;
        }

        this.currentNumber += value;
    }
}
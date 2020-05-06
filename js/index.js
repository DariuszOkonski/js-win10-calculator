class Calculator {
    constructor() {

        this.screen = null;
        this.mobileHistory = null;
        //TODO => NO BUTTONS REFERENCES

        this.uiElements = {
            btnHistoryMobile: '[data-btn-histor-mobile]',
            screen: '[data-screen]',
            mobileHistory: '[data-mobile-history]',
        }
        this.initialization();
    }

    initialization = () => {
        //TODO => NO BUTTONS HERE
        this.screen = document.querySelector(this.uiElements.screen);
        this.mobileHistory = document.querySelector(this.uiElements.mobileHistory);

        this.addEventListeners();
    }

    addEventListeners = () => {
        //TODO => ONLY BUTTONS
        document.querySelector(this.uiElements.btnHistoryMobile).addEventListener('click', this.btnHistoryMobileClick)
    }

    // private methods
    btnHistoryMobileClick = () => {
        this.screen.classList.toggle('screen-cover');
        this.mobileHistory.classList.toggle('show');
    }

}
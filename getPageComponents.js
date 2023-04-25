function getPageComponents() {
    document.querySelectorAll("[data-qa-selector]")
        .forEach((component) => {
            console.log(`[data-qa-selector=${component.dataset.qaSelector}]`);
        }
    );
};

getPageComponents();
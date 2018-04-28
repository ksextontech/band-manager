var bandManager = bandManager || {};

(function(bandManager) {

    const TOGGLE_ELEMENT_CLASS = '.navigation__toggle';

    var navigationModule = {};

    var toggleElement = document.querySelector(TOGGLE_ELEMENT_CLASS)
    toggleElement.addEventListener('click', onToggleClick);

    function onToggleClick(event) {
        var toggleElement = document.querySelector(TOGGLE_ELEMENT_CLASS);

        if (!toggleElement) {
            console.warn('no toggle element found');
            return;
        }

        var classList = toggleElement.classList;
        var openedClassName = 'navigation__toggle--opened'

        if (classList.contains(openedClassName)) {
            classList.remove(openedClassName);
        }
        else {
            classList.add(openedClassName)
        }

        toggleElement.classList = classList;
    }

    bandManager.navigationModule = navigationModule;

})(bandManager);
let tabWrappers = document.querySelectorAll('.tab-wrapper');

tabWrappers.forEach(wrapper => {
    let tabSelectors = wrapper.querySelectorAll('.tab-item');
    let tabPanels = wrapper.querySelectorAll('.tab-panel');

    function tabHandler(e) {
        e.preventDefault();
        let currentTarget = e.currentTarget;
        let currentTabNum = currentTarget.dataset.tab;

        tabSelectors.forEach(item => {
            item.classList.remove('active');
        });
        currentTarget.classList.add('active');

        tabPanels.forEach(panel => {
            panel.classList.remove('active');
            if (panel.dataset.tab === currentTabNum) {
                panel.classList.add('active');
            }
        });
    }

    tabSelectors.forEach((selector, index, tabSelectors) => {
        selector.addEventListener('click', tabHandler, true);
    });
});
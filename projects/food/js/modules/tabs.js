function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent() {

        tabsContent.forEach(content => {

            content.classList.add('hide');
            content.classList.remove('show', 'fade');
        });

        tabs.forEach(tab => {

            tab.classList.remove(activeClass);
        });
    }

    hideTabContent();

    function showTabContent(i = 0) {

        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide', 'fade');

        tabs[i].classList.add(activeClass);
    }

    showTabContent();

    tabsParent.addEventListener('click', (event) => {

        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {

            tabs.forEach((item, i) => {

                if (target == item) {

                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;
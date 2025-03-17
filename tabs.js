// tabs.js

// create custom HTMLElement: TabsComponent
class TabsComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    // get template
    const template = document.getElementById('tabs-component-template').content.cloneNode(true);
    const tabsNav = template.querySelector('.tabs-nav');
    const tabsPanel = template.querySelector('.tabs-panel');

    const tabsConfigScript = this.querySelector("script[type='application/json']");

    if (tabsConfigScript) {
      try {
        const tabsConfig = JSON.parse(tabsConfigScript.textContent);

        tabsConfig.tabs.forEach((tab, index) => {
          const tabNavItem = document.createElement('div');
          tabNavItem.classList.add('tab-nav-item');
          tabNavItem.textContent = tab.label;
          tabNavItem.dataset['key'] = index;

          // append tab nav item
          tabsNav.appendChild(tabNavItem);

          const tabContent = document.createElement('div');
          tabContent.classList.add('tab-content');
          tabContent.dataset['key'] = index;
          tabContent.textContent = tab.content;

          // append tab content
          tabsPanel.appendChild(tabContent);
        });
      } catch (error) {
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('error');

        errorMessage.innerHTML = `
          <p>Invalid JSON config.</p>
          <p>Ensure your config follows the format below: </p>
          <code>
            {
              "tabs": [
                { "label": "Tab 1", "content": "Content for Tab 1" },
                { "label": "Tab 2", "content": "Content for Tab 2" },
                { "label": "Tab 3", "content": "Content for Tab 3" }
              ]
            }
          </code>
        `;

        // display error message
        document.querySelector('body').appendChild(errorMessage);
      }
    }

    // append template
    this.appendChild(template);

    const tabNavItems = this.querySelectorAll('.tab-nav-item');
    const tabContents = this.querySelectorAll('.tab-content');

    tabNavItems.forEach(navItem => {
      navItem.addEventListener('click', function () {
        const tabKey = this.getAttribute("data-key");

        tabNavItems.forEach(navItem => navItem.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));

        this.classList.add("active");
        document.querySelector(`.tab-content[data-key='${tabKey}']`).classList.add("active");
      });
    });

    // Set the first tab as active by default
    tabNavItems[0].classList.add("active");
    tabContents[0].classList.add("active");
  }
}

customElements.define("tabs-component", TabsComponent);

console.log('log from tabs.js');

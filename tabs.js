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
    const tabNavItems = this.querySelectorAll('[slot="tab"]');
    const tabContents = this.querySelectorAll('[slot="content"]');

    console.log('tabNavItems: ', tabNavItems);

    // tabNavItems.forEach(navItem => {
    //   navItem.addEventListener('click', function () {
    //     const tabKey = this.getAttribute("data-tab-key");

    //     tabNavItems.forEach(navItem => navItem.classList.remove("active"));
    //     tabContents.forEach(content => content.classList.remove("active"));

    //     this.classList.add("active");
    //     document.querySelector(`.tab-content[data-content-key='${tabKey}']`).classList.add("active");
    //   });
    // });

    // // Set the first tab as active by default
    tabNavItems[0].classList.add("active");
    // tabContents[0].classList.add("active");
  }
}

customElements.define("tabs-component", TabsComponent);

console.log('log from tabs.js');

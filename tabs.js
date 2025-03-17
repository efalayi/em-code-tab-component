// tabs.js

// create custom HTMLElement: TabsComponent
class TabsComponent extends HTMLElement {
  constructor() {
    super();
  }
}

(function () {
  customElements.define("tabs-component", TabsComponent);

  console.log('log from tabs.js');
})();

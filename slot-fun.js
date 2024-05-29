class ComponentName extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window) {
      customElements.define(tagName || "slot-fun", ComponentName);
    }
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
	<slot></slot>
	`;

    const shadow = this.shadowRoot;

    console.log({ shadow });
    const slot = shadow.querySelector("slot");
    const parent = slot.assignedNodes()[1];

    const siblingCount = parent.childElementCount;
    parent.style.setProperty("--sibling-count", siblingCount);

    const siblings = parent.children;
    // Loop through all the children and add the custom property sibling-index to each.
    [...siblings].forEach((sibling, index) => {
      sibling.style.setProperty("--sibling-index", index + 1);
    });
  }
}

ComponentName.register();

console.log("Derp. Testing");

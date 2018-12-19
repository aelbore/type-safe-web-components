class HelloWorld extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `<h1>Hello World.</h1>`
  }

}

customElements.define('hello-world', HelloWorld);
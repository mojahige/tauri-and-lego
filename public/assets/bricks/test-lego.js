
// Lego version undefined
import { h, Component } from 'https://unpkg.com/@polight/lego/dist/lego.min.js'

class Lego extends Component {
  get vdom() {
    return ({ state }) => [
  h("p", {}, `Test ${state.name}`)]
  }
  get vstyle() {
    return ({ state }) => h('style', {}, `
    
  :host {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
    p {
    font-weight: 700;
    margin: 0;
    text-transform: uppercase;
  }
  `)}
}



export default class extends Lego {
    init() {
      this.state = {
        name: "Lego!!!",
      };
    }
  }

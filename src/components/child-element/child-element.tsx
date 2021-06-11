import { Component, h } from "@stencil/core";

@Component({
  tag: "child-element",
  shadow: true,
})
export class MyComponent {
  render() {
    return <slot name="child-slot"></slot>;
  }
}

import { Component, h } from "@stencil/core";

@Component({
  tag: "parent-element",
  shadow: true,
})
export class MyComponent {
  render() {
    return (
      <child-element>
        <slot name="parent-slot" slot="child-slot"></slot>
      </child-element>
    );
  }
}

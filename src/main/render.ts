import { Html, NodeType, IText, IAttributes, INode } from './types';

export function render(node: Html): Node {
  switch(node.type) {
    case NodeType.NODE:
      return createElement(node);
    case NodeType.TEXT:
      return createText(node);

    default:
      const _exhaustiveCheck: never = node;
      throw new Error(
        `Non-exhaustive match for ${_exhaustiveCheck}`
      );
  }
}

function createText(node: IText): Text {
  return document.createTextNode(node.value);
}

function applyAttributes(element: HTMLElement, attrs: IAttributes) {
  for(const key in attrs) {
    element.setAttribute(key, attrs[key]);
  }
}

function createElement(node: INode) {
  const element: HTMLElement = <HTMLElement>document.createElement(node.tagName);

  const children: Array<Html> = node.children;
  const length: number = children.length;

  applyAttributes(element, node.attributes);

  for(let i = 0; i < length; i += 1) {
    const childElement: Node = render(children[i]);
    element.appendChild(childElement);
  }

  return element;
}

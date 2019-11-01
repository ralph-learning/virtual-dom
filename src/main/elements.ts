import {
    INode,
    IText,
    IAttributes,
    Html,
    NodeType,
} from './types';

export const text =
  (val: string): IText => ({
      type: NodeType.TEXT,
      value: val
  });

export const node = (
  tagName: string,
  attributes: IAttributes = {},
  children: Array<Html> = [],
): INode => ({
  type: NodeType.NODE,
  tagName,
  attributes,
  children,
});

export const makeNode = (tagName: string) =>
  (attributes: IAttributes = {}, children: Array<Html>): INode =>
    node(tagName, attributes, children)

export const div = makeNode('div');
export const h1 = makeNode('h1');
export const ul = makeNode('ul');
export const li = makeNode('li');
export const p = makeNode('p');

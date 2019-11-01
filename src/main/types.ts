export const enum NodeType {
  TEXT,
  NODE
}

export interface IAttributes {
  [name: string]: string
}

export interface IText {
  type: NodeType.TEXT
  value: string
}

export interface INode {
  type: NodeType.NODE,
  tagName: string,
  attributes: IAttributes,
  children: Array<Html>,
}

export type Html =
    INode | IText
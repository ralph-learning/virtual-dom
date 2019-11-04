import { INode } from './types';

import { text, ul, li } from './elements';

interface ITodo {
  name: string
  completed: boolean
}

const view = (todos: Array<ITodo>): INode =>
  ul({ id: 'todo-list' }, todos.map((next: ITodo): INode =>
      li({ className: 'todo-item' }, [
          text(next.name)
      ])
  ))

export * from './elements';
export * from './render';
export * from './types';
export { render } from './render';
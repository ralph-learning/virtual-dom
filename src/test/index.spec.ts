import { assert } from 'chai';
import { node } from '../main/elements';
import { NodeType } from '../main/types';

assert.deepEqual(node('div', {}, []), {
    type: NodeType.NODE,
    tagName: 'div',
    attributes: {},
    children: [],
});

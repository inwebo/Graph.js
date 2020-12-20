import Node from "../src/Graph/Node";
import Graph from "../src/Graph/Graph";

const assert = require('assert');

describe('Graph', () => {
    const nodes = new Map([
        ['A', new Node('A')],
        ['B', new Node('B')],
        ['C', new Node('C')],
        ['D', new Node('D')],
        ['E', new Node('E')],
        // Node without neighbors
        ['X', new Node('X')],
    ]);

    // BiDirectionnal
    nodes.get('A').addNeighbor(nodes.get('B'));
    nodes.get('B').addNeighbor(nodes.get('A'));

    nodes.get('E').addNeighbor(nodes.get('D'));
    nodes.get('D').addNeighbor(nodes.get('E'));

    // Directed
    nodes.get('A').addNeighbor(nodes.get('D'));
    nodes.get('C').addNeighbor(nodes.get('E'));
    nodes.get('E').addNeighbor(nodes.get('B'));
    nodes.get('E').addNeighbor(nodes.get('A'));

    it('nodes.get(\'X\').hasNeighbors() = false', () => {
        assert.equal(nodes.get('X').hasNeighbors(), false);
    });

    it('nodes.get(\'A\').hasNeighbors() = true', () => {
        assert.equal(nodes.get('A').hasNeighbors(), true);
    });

    it('nodes.get(\'A\').isBidirectional() = true', () => {
        assert.equal(nodes.get('A').isBiDirectional(nodes.get('B')), true);
    });

    it('nodes.get(\'A\').isDirected(nodes.get(\'B\')) = false', () => {
        assert.equal(nodes.get('A').isDirected(nodes.get('B')), false);
    });
});
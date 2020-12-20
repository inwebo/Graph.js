import Node from "../src/Graph/Node";
import Graph from "../src/Graph/Graph";

const assert = require('assert');
const expect = require('chai').expect;
const chai   = require('chai');

describe('Graph', () => {
    const nodes = new Map([
        ['A', new Node()],
        ['B', new Node()],
        ['C', new Node()],
        ['D', new Node()],
        ['E', new Node()],
        // Node without neighbors
        ['X', new Node()],
    ]);

    const graph = new Graph(nodes);

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
        // assert.equal(nodes.get('A').isBiDirectional('B', nodes.get('B')), true);
    });
});
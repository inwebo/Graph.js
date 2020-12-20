import RenderGraph from "../renderGraph";
import Graph from "../../../../src/Graph/Graph";
import Node from "../../../../src/Graph/Node";

const demo1 = () => {
    let canvas = document.getElementById('demo-1');

    // Graph
    const nodes = new Map([
        ['A', new Node('A')],
        ['B', new Node('B')],
        ['C', new Node('C')],
        ['D', new Node('D')],
        ['E', new Node('E')],
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

    const renderGraph = new RenderGraph(canvas);

    renderGraph.draw(graph);
};

export default demo1;

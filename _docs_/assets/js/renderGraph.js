import {Renderer2D} from "@inwebo/render.js";
import rand from "./Rand";
import {Vector2D} from "@inwebo/vector";

export default class RenderGraph extends Renderer2D {
    _draw([graph]) {
        const nodes         = graph.getNodes();
        const nodePixelSize = new Vector2D(10,10);
        const canvasSize    = new Vector2D(500, 400);

        const coordinates = new Map();

        // Randomize
        for (let [k] of nodes) {
            const x      = rand(50, canvasSize.getX());
            const y      = rand(50, canvasSize.getY());
            const origin = new Vector2D(x, y);

            coordinates.set(k, origin);
        }

        // Draws relation
        /**
         * For each nodes in graph
         */
        for (let [key, node] of nodes) {
            const originStart = coordinates.get(key);

            // Node has neighbors
            if(node.getNeighbors().size > 0) {
                /**
                 * For each neighbors as neighborNode
                 */
                node.getNeighbors().forEach((neighborNode) => {
                    const originEnd = coordinates.get(`${neighborNode.getKey()}`);

                    if(node.isBiDirectional(neighborNode)) {
                        this.getCtx().strokeStyle = "red";
                    } else {
                        this.getCtx().strokeStyle = "grey";
                    }

                    this.getCtx().beginPath();
                    this.getCtx().moveTo(originStart.getX(), originStart.getY());
                    this.getCtx().lineTo(originEnd.getX(), originEnd.getY());
                    this.getCtx().stroke();
                });
            }
        }

        // Draw nodes
        for (let [k] of nodes) {
            const origin = coordinates.get(k);

            this.getCtx().beginPath();
            this.getCtx().arc(
                origin.getX(),
                origin.getY(),
                nodePixelSize.getX(),
                0,
                2 * Math.PI);
            this.getCtx().fillStyle = "black";
            this.getCtx().fill();
        }

        // Draws Key
        for (let [k] of nodes) {
            const originStart = coordinates.get(k);

            this.getCtx().beginPath();
            const fontSize = 8;
            this.getCtx().fillStyle = "white";
            this.getCtx().font = `${fontSize}px`;
            this.getCtx().fillText(k, originStart.getX() - fontSize/2, originStart.getY() + fontSize/2);
        }
    }
}
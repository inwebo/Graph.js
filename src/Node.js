/**
 * Vertice, node graph representatioon
 */
export default class Node {
  /**
   * @return {string}
   */
  getKey() {
    return this._key
  }

  /**
   * @param {string} key
   */
  constructor(key) {
    /**
     * @type {Map<any, Node>}
     * @private
     */
    this._neighbors = new Map()
    this._key = key
  }

  /**
   * @param {Node} node
   */
  addNeighbor(node) {
    this._neighbors.set(node.getKey(), node)
  }

  /**
   * @return {Map}
   */
  getNeighbors() {
    return this._neighbors
  }

  /**
   * @param {string} key
   * @return {Node|boolean}
   */
  getNeighbor(key) {
    if (this.hasNeighbor(key)) {
      return this._neighbors.get(key)
    }

    return false
  }

  /**
   * @param {Node} node
   * @return {boolean}
   */
  isBiDirectional(node) {
    if (this.hasNeighbor(node.getKey())) {
      return this.getNeighbor(node.getKey()).hasNeighbor(this.getKey())
    }

    return false
  }

  /**
   * @param {Node} node
   * @return {boolean}
   */
  isDirected(node) {
    return (
      this.hasNeighbor(node.getKey()) &&
      false === this.getNeighbor(node.getKey()).hasNeighbor(this.getKey())
    )
  }

  /**
   * @param key
   * @return {boolean}
   */
  hasNeighbor(key) {
    return this._neighbors.has(key)
  }

  /**
   * @return {boolean}
   */
  hasNeighbors() {
    return this._neighbors.size !== 0
  }
}

import { Edge } from ".";

export class Vertex<T> {
	edges: Edge<T>[] = [];
	meta?: T;

	constructor(meta?: T) {
		this.meta = meta;
	}

	addEdge(edge: Edge<T>) {
		this.edges.push(edge);
	}

}

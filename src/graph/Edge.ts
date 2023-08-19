import { Vertex } from ".";

export class Edge<T> {
	source: Vertex<unknown>;
	target: Vertex<unknown>;
	weight?: number;
	meta?: T;


	constructor(source: Vertex<unknown>, target: Vertex<unknown>, weight?: number, meta?: T) {
		this.source = source;
		this.target = target;
		this.weight = weight;
		this.meta = meta;
	}
}

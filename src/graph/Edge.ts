import { Vertex } from ".";
import { v4 as uuid } from "uuid";

export class Edge<T> {
	uuid: string = uuid();
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

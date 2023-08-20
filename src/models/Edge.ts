import { Vertex } from ".";
import { v4 as uuid } from "uuid";

export class Edge<T = unknown> {
	uuid: string = uuid();
	source: Vertex;
	target: Vertex;
	weight?: number;
	meta?: T;


	constructor(source: Vertex, target: Vertex, weight: number, meta?: T) {
		this.source = source;
		this.target = target;
		this.weight = weight;
		this.meta = meta;
	}
}

import { createRef } from "react";
import { v4 as uuid } from "uuid";
import { Edge } from ".";

export class Vertex<T = unknown> {
	uuid: string = uuid();
	ref = createRef<HTMLSpanElement>();
	edges: Edge[] = [];
	meta?: T;

	constructor(meta?: T) {
		this.meta = meta;
	}

	addEdge(edge: Edge) {
		this.edges.push(edge);
	}
}

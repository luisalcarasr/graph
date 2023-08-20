import { Ref, createRef } from "react";
import { Edge } from ".";
import { v4 as uuid } from "uuid";

export class Vertex<T = unknown> {
	uuid: string = uuid();
	ref: Ref<HTMLSpanElement> = createRef();
	edges: Edge[] = [];
	meta?: T;

	constructor(meta?: T) {
		this.meta = meta;
	}

	addEdge(edge: Edge) {
		this.edges.push(edge);
	}

}

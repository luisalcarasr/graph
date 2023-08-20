import { Ref, createRef } from "react";
import { Edge } from ".";
import { v4 as uuid } from "uuid";

export class Vertex<T> {
	uuid: string = uuid();
	ref: Ref<HTMLSpanElement> = createRef();
	edges: Edge<T>[] = [];
	meta?: T;

	constructor(meta?: T) {
		this.meta = meta;
	}

	addEdge(edge: Edge<T>) {
		this.edges.push(edge);
	}

}

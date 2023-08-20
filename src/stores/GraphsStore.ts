import { action, makeAutoObservable } from "mobx";
import { Edge, Vertex } from "../models";

export class GraphStore {

	/**
	 * The vertices of the graph.
	 */
	vertices: Vertex[] = [];

	/**
	 * The edges of the graph.
	 */
	edges: Edge[] = [];


	constructor() {
		makeAutoObservable(this)
	}

	/**
	 * Adds a vertex to the graph.
	 */
	@action
	addVertex(vertex: Vertex = new Vertex()) {
		this.vertices.push(vertex);
		return vertex;
	}

	/**
	 * Adds an edge to the graph.
	 * @param edge The edge to add.
	 * @returns The edge that was added.
	 */
	@action
	addEdge(edge: Edge) {
		edge.source.addEdge(edge);
		edge.target.addEdge(edge);
		this.edges.push(edge);
	}
}

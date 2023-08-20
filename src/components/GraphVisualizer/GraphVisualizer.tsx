import { createUseStyles } from "react-jss"
import { GlobalTheme, useTheme  } from "../../hooks"
import { useGraphStore } from "../../hooks/useGraphStore"
import { observer } from "mobx-react"
import { Vertex } from "./Vertex"
import { useEffect } from "react"
import { Edge } from "./Edge"

const useStyles = createUseStyles((theme: GlobalTheme) => {
	return ({
		graphVisualizer: {
			width: "100vw",
			height: "100vh",
			backgroundColor: theme.colorBgBase
		},
		content: {
			margin: 0,
			position: "absolute",
			transform: "translate(-50%, -50%)",
			top: "50%",
			left: "50%",
		},
	})
})

export const GraphVisualizer = observer(() => {
	const theme = useTheme()
    const classes = useStyles({ theme })
	const store = useGraphStore()

	useEffect(() => {
		const source = store.addVertex()
		const target = store.addVertex()
		store.addEdge({source, target})
	}, [store])

    return (
		<div className={classes.graphVisualizer}>
			<span className={classes.content}>
				{store.vertices.map((vertex, id) => (
					<Vertex key={vertex.uuid} id={id} vertex={vertex} />
				))}
				{store.edges.map((edge, id) => (
					<Edge key={edge.uuid} id={id} edge={edge} />
				))}
			</span>
		</div>
    )
})

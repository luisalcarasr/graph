import { Card } from "antd"
import { observer } from "mobx-react"
import { createUseStyles } from "react-jss"
import { useGraphStore } from "../../hooks/useGraphStore"

const useStyles = createUseStyles({
	algorithms: {
		width: 200,
		margin: 30,
		position: 'fixed',
		left: 0,
		top: 0,
		boxShadow: "0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12),0 9px 28px 8px rgba(0, 0, 0, 0.05);"
	}
})

export const Algorithms = observer(() => {
	const store = useGraphStore()
	const classes = useStyles()
	return (
		<Card rootClassName={classes.algorithms}>
			<p>Vertices: {store.vertices.length}</p>
			<p>Edges: {store.edges.length}</p>
		</Card>
	)
})

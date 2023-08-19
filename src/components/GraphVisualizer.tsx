import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    graphVisualizer: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "lightblue",
    },
    graphVisualizerTitle: {
        fontSize: "2rem",
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
})

export const GraphVisualizer = () => {
    const classes = useStyles()
    return (
        <div className={classes.graphVisualizer}>
            <p className={classes.graphVisualizerTitle}>Here will be the Graph Visualizer...</p>
        </div>
    )
}

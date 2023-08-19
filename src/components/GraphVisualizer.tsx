import { createUseStyles } from "react-jss"
import { GlobalTheme, useTheme  } from "../hooks"
import { useGraphStore } from "../hooks/useGraphStore"
import { observer } from "mobx-react"

const useStyles = createUseStyles((theme: GlobalTheme) => {
	return ({
		graphVisualizer: {
			width: "100vw",
			height: "100vh",
			backgroundColor: theme.colorBgBase
		},
	})
})

export const GraphVisualizer = observer(() => {
	const theme = useTheme()
    const classes = useStyles({ theme })
	const store = useGraphStore()
    return (
        <div className={classes.graphVisualizer}>
			{JSON.stringify(store.vertices)}
        </div>
    )
})

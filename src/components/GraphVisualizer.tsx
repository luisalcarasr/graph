import { createUseStyles } from "react-jss"
import { GlobalTheme, useTheme  } from "../hooks"

const useStyles = createUseStyles((theme: GlobalTheme) => {
	return ({
		graphVisualizer: {
			width: "100vw",
			height: "100vh",
			backgroundColor: theme.colorBgBase
		},
	})
})

export const GraphVisualizer = () => {
	const theme = useTheme()
    const classes = useStyles({ theme })
    return (
        <div className={classes.graphVisualizer}>
        </div>
    )
}

import { Card } from "antd"
import { createUseStyles } from "react-jss"

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

export const Algorithms = () => {
	const classes = useStyles()
	return (
		<Card rootClassName={classes.algorithms}></Card>
	)
}

import { observer } from "mobx-react"
import { Vertex as Vertice } from "../../graph"
import { Tooltip } from "antd"
import { createUseStyles } from "react-jss"
import { GlobalTheme, useTheme } from "../../hooks"

const useStyle = createUseStyles((theme: GlobalTheme) => {
	return {
		vertex: {
			borderRadius: "50%",
			border: "1px solid " + theme.colorBorder,
			width: "2rem",
			height: "2rem",
			display: "inline-block",
			boxShadow: theme.boxShadow,
			margin: "3rem",
			backgroundColor: theme.colorBgBase,
		},
		id: {
			display: "table-cell",
			verticalAlign: "middle",
			textAlign: "center",
			height: "2rem",
			width: "2rem",
			fontFamily: theme.fontFamily,
			fontSize: theme.fontSize,
			color: theme.colorTextBase,
		}
	}
})

export interface VertexProps {
	vertex: Vertice<unknown>
	id: number
}

export const Vertex: React.FC<VertexProps> = observer(({ vertex, id}) => {
	const theme = useTheme()
	const classes = useStyle({ theme })
	return (
		<Tooltip title={vertex.uuid}>
			<span ref={vertex.ref} className={classes.vertex}>
				<p className={classes.id}>{id}</p>
			</span>
		</Tooltip>
	)
})

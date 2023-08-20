import { createUseStyles } from "react-jss";
import { GlobalTheme, useTheme } from "../../hooks";
import { observer } from "mobx-react";
import { Edge as Arista } from "../../graph";

const useStyles = createUseStyles((theme: GlobalTheme) => {
	return {
		edge: {
			position: 'absolute',
			left: 0,
			top: 0,
			minWidth: '1px',
			height: '1px',
			backgroundColor: theme.colorBorder,
			transformOrigin: "0 0",
			zIndex: -1,
			boxShadow: theme.boxShadow,
		}
	}
})

export interface EdgeProps {
	edge: Arista<unknown>
	id: number
}

export const Edge: React.FC<EdgeProps> = observer(({ edge, id }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const { source, target } = edge;

	const sourceRef = source.ref?.current as HTMLSpanElement;
	const targetRef = target.ref?.current as HTMLSpanElement;

	if (!sourceRef || !targetRef) return (<></>);

	const startX = sourceRef.offsetLeft + sourceRef.offsetWidth / 2;
	const startY = sourceRef.offsetTop + sourceRef.offsetHeight / 2;
	const lenght = Math.sqrt(Math.pow(targetRef.offsetLeft - sourceRef.offsetLeft, 2) + Math.pow(targetRef.offsetTop - sourceRef.offsetTop, 2));
	const angle = Math.atan2(targetRef.offsetTop - sourceRef.offsetTop, targetRef.offsetLeft - sourceRef.offsetLeft);

	console.log(startX, startY, angle)
	return (
		<span
			className={classes.edge}
			style={{
				width: `${lenght}px`,
				transform: `translate(${startX}px, ${startY}px) rotate(${angle}rad)`,
			}}
		/>
	)
})

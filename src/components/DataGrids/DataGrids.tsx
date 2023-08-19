import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";
import { Card, Table, Tabs } from "antd"
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	dataGrids: {
		width: 500,
		margin: 30,
		position: 'fixed',
		bottom: 0,
		boxShadow: "0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12),0 9px 28px 8px rgba(0, 0, 0, 0.05);"
	}
})

export const DataGrids = () => {
	const classes = useStyles()
	return (
		<Card rootClassName={classes.dataGrids}>
			<Tabs
				defaultActiveKey="2"
				type="card"
				items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
					const id = String(i + 1);

					return {
					label: (
						<span>
							<Icon />
							Tab {id}
						</span>
					),
					key: id,
					children: <Table />,
				};
				})}
			/>
		</Card>
	)
}

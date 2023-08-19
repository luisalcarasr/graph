import { ConfigProvider } from "antd";
import { GraphVisualizer } from "./components";
import { Algorithms } from "./components/Algorithms";
import { DataGrids } from "./components/DataGrids";
import { FloatMenu } from "./components/FloatMenu";
import { Legends } from "./components/Lengends";
import { useThemeConfig } from "./hooks";



export const App = () => {
	const themeConfig = useThemeConfig()

	return (
		<>
			<ConfigProvider theme={themeConfig}>
				<Algorithms />
				<Legends />
				<GraphVisualizer />
				<DataGrids />
				<FloatMenu />
			</ConfigProvider>
		</>
	)
}

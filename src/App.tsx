import { ConfigProvider } from "antd";
import { GraphVisualizer } from "./components";
import { Algorithms } from "./components/Algorithms";
import { DataGrids } from "./components/DataGrids";
import { FloatMenu } from "./components/FloatMenu";
import { Legends } from "./components/Lengends";
import { useThemeConfig } from "./hooks";
import { GraphStoreProvider } from "./contexts";

export const App = () => {
	const themeConfig = useThemeConfig()

	return (
		<>
			<GraphStoreProvider>
				<ConfigProvider theme={themeConfig}>
					<Algorithms />
					<Legends />
					<GraphVisualizer />
					<DataGrids />
					<FloatMenu />
				</ConfigProvider>
			</GraphStoreProvider>
		</>
	)
}

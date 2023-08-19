import { PropsWithChildren, createContext } from "react";
import { GraphStore } from "../stores/GraphsStore";

const store = new GraphStore();

export const GraphStoreContext = createContext<GraphStore>(store);

export const GraphStoreProvider: React.FC<PropsWithChildren> = ({children}) => (
	<GraphStoreContext.Provider value={store}>
		{children}
	</GraphStoreContext.Provider>
)

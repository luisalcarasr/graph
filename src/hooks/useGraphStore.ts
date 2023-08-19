import { useContext } from "react";
import { GraphStoreContext } from "../contexts";

export const useGraphStore = () => {
	return useContext(GraphStoreContext)
}

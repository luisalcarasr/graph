import { FloatButton } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import { observer } from "mobx-react"
import { useGraphStore } from "../../hooks/useGraphStore"

export const FloatMenu = observer(() => {
	const store = useGraphStore()
	return (
		<FloatButton.Group shape="square" style={{ right: 24 }} >
			<FloatButton icon={<PlusOutlined />} onClick={() => store.addVertex()} />
		</FloatButton.Group>
	)
})

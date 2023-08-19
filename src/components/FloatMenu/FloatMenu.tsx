import { FloatButton } from "antd"
import { QuestionCircleOutlined, SyncOutlined } from "@ant-design/icons"

export const FloatMenu = () => {
	return (
		<FloatButton.Group shape="square" style={{ right: 24 }} >
			<FloatButton icon={<QuestionCircleOutlined />} />
			<FloatButton />
			<FloatButton icon={<SyncOutlined />} />
			<FloatButton.BackTop visibilityHeight={0} />
		</FloatButton.Group>
	)
}

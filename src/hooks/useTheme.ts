import { GlobalToken, theme } from "antd"

const { useToken } = theme

export type GlobalTheme = GlobalToken

export const useTheme = (): GlobalTheme => {
	const { token } = useToken()

	return token
}

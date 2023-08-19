import { ThemeConfig, theme } from "antd";
import { useEffect, useState } from "react";

const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

export const useThemeConfig = (): ThemeConfig => {
	const {matches: isDark} = darkModeMediaQuery
	const [isDarkTheme, setIsDarkTheme] = useState(isDark)

	const { darkAlgorithm, compactAlgorithm, defaultAlgorithm } = theme

	useEffect(() => {

		const setTheme = (e: MediaQueryListEvent) => {
			setIsDarkTheme(e.matches)
		}

		darkModeMediaQuery.addListener(setTheme);

		return () => {
			darkModeMediaQuery.removeListener(setTheme)
		}
	}, [])

	return {
		algorithm: [compactAlgorithm, isDarkTheme ? darkAlgorithm : defaultAlgorithm]
	}
}


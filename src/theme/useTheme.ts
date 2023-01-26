import { useContext } from 'react';
import { LS_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeRes {
    switchTheme: () => void;
    theme: Theme;
}

export function useTheme() {
    const { theme, setTheme } = useContext(ThemeContext);
    const switchTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme?.(newTheme);
        localStorage.setItem(LS_THEME_KEY, newTheme);
    };
    return { theme: theme || Theme.LIGHT, switchTheme };
}

import React, { FC, useMemo, useState } from 'react';
import { LS_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

const defaultTheme = (localStorage.getItem(LS_THEME_KEY) || Theme.LIGHT) as Theme;

interface ThemeProviderProps {
    initialTheme: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { children, initialTheme } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

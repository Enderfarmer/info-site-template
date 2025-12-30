import { createContext, useContext, useState } from "react";
import { Theme } from "../declarations.d";

export const ThemeContext = createContext<Theme>("light");
export const oppositeTheme = (theme: Theme) => {
    return theme === "light" ? "dark" : "light";
};

export const useCurrentTheme: () => [Theme, Function] = () => {
    const theme = useContext<Theme>(ThemeContext);
    const [themeState, setThemeState]: [Theme, Function] = useState(theme);
    const setTheme = (new_theme: Theme) => {
        localStorage.setItem("theme", new_theme);
        setThemeState(new_theme);
    };
    return [themeState, setTheme];
};

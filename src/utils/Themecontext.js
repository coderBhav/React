import { createContext, useEffect, useState } from "react";

export const Themecontext = createContext(
    {
        theme : "light",
        toggleTheme : () => {} ,
    }
);

export const ThemeProvider = ({children}) => {
    const [theme , setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((prev)=>(prev === "light" ? "dark" : "light"));
    };
    useEffect(()=>{
        const root = window.document.documentElement;
        if(theme === "dark"){
            root.classList.add("dark");
        }
        else{
            root.classList.remove("dark");
        }
    },[theme]);

    return(
        <Themecontext.Provider value={{theme , toggleTheme}}>
            {children}
        </Themecontext.Provider>
    );
};
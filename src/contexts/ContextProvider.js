// Context - API
import React, { createContext , useContext, useState} from "react";

const StateContext = createContext();

// initial state of different things
const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

// function
export const ContextProvider = ({ children }) => {
    
    const [activeMenu, setActiveMenu] = useState(true);
    
    // to know whether the icon is clicked or not
    const [isClicked,setIsClicked] = useState(initialState)

    // handle click
    const handleClick = (clicked) => {
        // set only the corresponding value
        setIsClicked({ ...initialState, [clicked] : true})
    }

    // screensize
    const [screenSize, setScreenSize] = useState(undefined)
    // color
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    // mode
    const [currentMode, setCurrentMode] = useState('Dark')

    // setter fn
    const setMode = (e) => {
        setCurrentMode(e.target.value)
        localStorage.setItem('themeMode',e.target.value)
        setThemeSettings(false)
    }
    const setColor = (color) => {
        setCurrentColor(color)
        localStorage.setItem('colorMode',color)
        setThemeSettings(false)

    }
    const [themeSettings, setThemeSettings] = useState(false)

    return (
        // passes the value(state) to all of the application
        // context return children
        <StateContext.Provider
            value={ {
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentColor,
                currentMode,
                setColor,
                setMode,
                themeSettings,
                setThemeSettings,
            } }
        >
            {children}
        </StateContext.Provider>
    )
}

// to use the context inside of the sidebar
// get data from context using context of StateContext
export const useStateContext = () => useContext(StateContext);
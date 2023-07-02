import React, {useEffect, useState, useContext} from 'react';

// @ts-ignore
export const MouseContext = React.createContext();

export const useMouseContext = () => {
    return useContext(MouseContext);
}

export const MouseContextProvider = ({ children }) => {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    useEffect(() => {
        window.addEventListener('mousemove', (event) => {
            if (event.clientX < 0) {
                setMousePosition({x: 0, y: event.clientY})
                return
            }
            if (event.clientY < 0) {
                setMousePosition({x: event.clientX, y: 0})
                return
            }
            setMousePosition({x: event.clientX, y: event.clientY})
        });
    }, [])

    return (
        <MouseContext.Provider
            value={{
                mousePosition: mousePosition,
                setMousePosition: setMousePosition
            }}
        >
            {children}
        </MouseContext.Provider>
    )
}

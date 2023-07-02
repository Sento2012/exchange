// @ts-ignore
import styles from "./styles.module.scss";
import React, { useEffect, useState } from "react";
import { useMouseContext } from "../../../context/MouseContext";

const Header = ({divWidth, setDivPosition}) => {
    const [isCaptured, setIsCaptured] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(15);
    // @ts-ignore
    const { mousePosition } = useMouseContext()

    const mouseDown = () => {
        setIsCaptured(true)
    }

    const mouseUp = () => {
        setIsCaptured(false)
    }

    useEffect(() => {
        if (!isCaptured) return;

        setDivPosition({
            x: mousePosition.x - divWidth / 2,
            y: mousePosition.y - headerHeight / 2
        })
    }, [mousePosition])

    return (
        <div
            onPointerDown={mouseDown}
            onPointerUp={mouseUp}
            className={styles.container__header}
        >
            Header
        </div>

    );
}

export default Header;

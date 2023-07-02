// @ts-ignore
import styles from "./styles.module.scss";
import React, { useState } from "react";
import {Resizable} from 're-resizable';
import Header from "./Header/Header";

const Container = ({ children }) => {
    const [divPosition, setDivPosition] = useState({x: 100, y: 100});
    const [divHeight, setDivHeight] = useState(150);
    const [divWidth, setDivWidth] = useState(200);

    const resizebaleStyle = {
        position: "absolute",
        left: `${divPosition.x}px`,
        top: `${divPosition.y}px`,
    } as const;

    const ContainerResize = ref => {
        setDivWidth(ref.offsetWidth)
        setDivHeight(ref.offsetHeight)
    }

    return (
        <Resizable
            style={resizebaleStyle}
            defaultSize={{
                width: `${divWidth}px`,
                height: `${divHeight}px`,
            }}
            onResize={(e, direction, ref, d) => ContainerResize(ref)}
            className={styles.resisable__container}
        >
            <div
                style={{
                    height: `${divHeight}px`,
                    width: `${divWidth}px`,
                }}
                className={styles.container}
            >
                <div className={styles.container__wrapper}>
                    <Header
                        divWidth={divWidth}
                        setDivPosition={setDivPosition}
                    />
                    <div className={styles.container__body} >
                        { children }
                    </div>
                </div>
            </div>
        </Resizable>
    );
}

export default Container;

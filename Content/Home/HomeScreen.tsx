import React from "react";
import style from "./HomeScreen.module.css"
import {config, useSpring, animated} from 'react-spring'

export const HomeScreen = () => {
    const color = useSpring({
        from: {color: '#05d3c8'},
        to: {color: '#f5a906'},
        loop: {reverse: true},
    })
    return (
        <section className={style.HomeScreenInner}>
            <animated.h1 className={style.Title} style={color}>АВТО ПОДБОР</animated.h1>
        </section>
    )
}

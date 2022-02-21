import {Card} from "antd";
import Meta from "antd/lib/card/Meta";
import style from "./PriceCard.module.css"
import React from "react";
import {config, useSpring, animated } from "react-spring";

export const PriceCard: React.FC<PriceCardPropsType> = ({price, Title}) => {
    const { number } = useSpring({
        reset: true,
        from: { number: 0 },
        number: price,
        config: config.molasses,
    })
    return (
        <>
            <Card
                bordered={false}
                bodyStyle={{backgroundColor:'rgba(0,0,0,0.62)'}}
                className={style.PriceCard}
                hoverable
                style={{width: 300}}
                cover={<img alt="example"
                            src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&fit=crop"/>}
            >
                <Meta title={Title} style={{padding: '20px'}}/>
                <span style={{color: '#f5a906', fontWeight:'bold', fontSize:'20px'}}>цена : </span>
                <animated.span style={{color: '#f5a906', fontWeight:'bold', fontSize:'20px'}}>{number.to(n => n.toFixed(0))}</animated.span>
                <span style={{color: '#f5a906', fontWeight:'bold', fontSize:'20px'}}> $</span>
            </Card>
        </>
    )
}

interface PriceCardPropsType {
    price: number;
    Title: string;
}

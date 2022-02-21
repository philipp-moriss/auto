import {Card} from "antd";
import Meta from "antd/lib/card/Meta";
import style from "./PriceCard.module.css"
import React from "react";

export const PriceCard: React.FC<PriceCardPropsType> = ({price, Title}) => {
    return (
        <>
            <Card
                bordered={false}
                bodyStyle={{backgroundColor:'rgba(0,0,0,0.62)'}}
                className={style.PriceCard}
                hoverable
                style={{width: 240}}
                cover={<img alt="example"
                            src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&fit=crop"/>}
            >
                <Meta title={Title} style={{padding: '20px'}}/>
                <span style={{color: '#f5a906'}}>цена : {price}</span>
            </Card>
        </>
    )
}

interface PriceCardPropsType {
    price: string;
    Title: string;
}

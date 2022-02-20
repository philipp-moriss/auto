import {Card, Col} from "antd";
import style from './Card.module.css'
import React from "react";
export const CardInfo : React.FC<CardPropsType> = ({Title}) => {
    return (
        <Card style={{ width: 300 }} className={style.Card}>
            <h3>{Title}</h3>
        </Card>
    )
}

type CardPropsType = {
    Title : string
}

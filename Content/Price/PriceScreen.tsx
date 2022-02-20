import { Card } from "antd"
import Meta from "antd/lib/card/Meta"
import style from './PriceScreen.module.css'
import {PriceCard} from "../../components/PriceCard/PriceCard";
export const PriceScreen = () => {
    return (
        <section className={style.PriceInner}>
            <PriceCard price={'цена : 120р'} Title={'ПОДБОР'}/>
            <PriceCard price={'цена : 120р'} Title={'ПОДБОР'}/>
            <PriceCard price={'цена : 120р'} Title={'ПОДБОР'}/>
        </section>
    )
}

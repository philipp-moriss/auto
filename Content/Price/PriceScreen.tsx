import { Card } from "antd"
import Meta from "antd/lib/card/Meta"
import style from './PriceScreen.module.css'
import {PriceCard} from "../../components/PriceCard/PriceCard";
export const PriceScreen = () => {
    return (
        <section className={style.PriceInner}>
            <PriceCard price={120} Title={'ПОДБОР'}/>
            <PriceCard price={300} Title={'ПОДБОР'}/>
            <PriceCard price={120} Title={'ПОДБОР'}/>
        </section>
    )
}

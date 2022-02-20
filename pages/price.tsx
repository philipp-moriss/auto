import {Header} from "../components/Header/Header";
import {PriceScreen} from "../Content/Price/PriceScreen";

export default function price() {
    return (
        <div className={"priceScreenWrapper"}>
            <Header ColorMod={false} active={'price'}/>
            <div className={'container'}>
                <PriceScreen/>
            </div>
        </div>
    )
}

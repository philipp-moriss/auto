import {Header} from "../components/Header/Header";
import {HomeScreen} from "../Content/Home/HomeScreen";

export default function  home () {
    return(
        <section className={"homeScreenWrapper"}>
            <Header ColorMod={true}/>
            <div className={'container'}>
                <HomeScreen/>
            </div>
        </section>
    )
}

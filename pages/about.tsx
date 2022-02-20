import {Button} from "../components/Button/Button";
import {Header} from "../components/Header/Header";
import { AboutScreen } from "../Content/About/AboutScreen";


export default function about() {
  return (
    <div className={"wrapper"}>
        <Header ColorMod={false} active={'about'}/>
        <div className={'container'}>
            <AboutScreen/>
        </div>
    </div>
  )
}

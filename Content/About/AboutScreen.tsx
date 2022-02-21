import style from './AboutScreen.module.css'
import {CardInfo} from "../../components/Card/CardInfo";
import { useSpring, animated } from 'react-spring';
export const AboutScreen = () => {
    const affect = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 2000 },
    })
    return (
        <section className={style.homeScreen}>
            <h1 className={style.Title}><span className={style.TitleSpan}>Профессиональный автоподбор</span> - подбор автомобиля с гарантией</h1>
            <animated.p className={style.subTitle} style={affect}>
                Наша компания занимается поиском и подбором подержанных автомобилей по критериям заказчика, а также
                проверкой и диагностикой авто перед покупкой.
                <br/>
                <br/>
                Мы подберем для вас лучший автомобиль на рынке Беларуси в соответствии с Вашими пожеланиями. Возьмем на
                себя ответственность за исправность будущей машины и законность сделки купли-продажи. Окажем помощь на
                каждом этапе: в выборе авто, подборе, проверки, покупке, а также оформлении.
                <br/>
                Мы гарантируем:
            </animated.p>
            <div className={style.InnerInfo}>
                <CardInfo Title={'Полный возврат денег'}/>
                <CardInfo Title={'Техническую исправность автомобиля'}/>
                <CardInfo Title={'Юридическую чистоту сделки'}/>
            </div>
            <div className={style.whyDoYouNeed}>
                <h2 className={style.whyDoYouNeedTitle}>ЗАЧЕМ НУЖНА УСЛУГА:</h2>
                <animated.p className={style.whyDoYouNeedText} style={affect}>
                    сегодня очень сложно найти и выбрать
                    хороший автомобиль. на рынке беларуси около 70% автомобилей со ск
                    рученным пробегом или побывавших в дтп. еще 15% с серьезными техническими проблемами.
                    и только из оставшихся 15% можно найти и купить что то стоящее. именно этим мы и занимаемся.
                    автоподбор это не просто услуга, для нас это образ жизни и мышления. мы не продаем и не покупаем
                    вам автомобили, мы экономим ваше время и бережем ваш кошелек.
                </animated.p>
            </div>
        </section>
    )
}

import Logo from '../../public/assets/logo.svg'
import {PATH} from '../../const/PATH';
import style from './Header.module.css'
import React from "react";
export const Header : React.FC<HeaderPropsType> = ({ColorMod, active= ''}) => {

    return (
        <div className={style.header__menu}>
            <a href={PATH.HOME}>
                <Logo style={{width: 100, height: 100, backgroundColor:'rgba(225,156,7,0.23)',borderRadius:'50%'}}/>
            </a>
            <nav className={style.header__menu__inner}>
                <ul className={`${style.header__menu__list} ${ColorMod ? style.header__menu__listActive : ''}`}>
                    <li>
                        <a href={PATH.ABOUT} className={`${active === 'about' ? style.active : ''}`}>О нас</a>
                    </li>
                    <li>
                        <a href={PATH.PRICE} className={`${active === 'price' ? style.active : ''}`}>Стоимость</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

interface HeaderPropsType {
    ColorMod : boolean;
    active?: 'price' | 'about'
}

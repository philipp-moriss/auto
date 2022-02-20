import React from "react";
import style from './Button.module.css'
export const Button: React.FC<ButtonPropsType> = ({
                                                      onClickHandler,
                                                      Title ,
                                                  }) => {
    return (
        <button className={style.button} onClick={onClickHandler} >{Title}</button>
    )
}

interface ButtonPropsType {
    onClickHandler: () => void;
    Title: string;
}

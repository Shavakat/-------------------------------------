import React from 'react'
import "./FeedBack.css"

const FeedBack = () => {
    return (
        <div className='fb_cont'>
            <div className="fb_item">
                <div className="fb_el">
                    <p className="title_txt fb_txt">Получите больше информации</p>
                    <form className='fb_form_el' action="/" method="post">
                        <input className='input_fb' type="text" placeholder='фамилия Имя отчество' />
                        <input className='input_fb' type="tel" placeholder='Номер телефона' />
                        <div className='btn_in_'>
                            <input className='input_fb' type="text" placeholder='Тема заявки' />
                            <button className='btn_fb' type="submit"></button>
                        </div>
                    </form>
                    <p className="polsogl">* Нажав кнопку <span>“Отправить”</span>, вы соглашаетесь с нашими условиями и подтверждаете, что ознакомились с нашей <span><a href="#">Политикой</a></span> использования данных.</p>
                </div>
                <img className='fb_img' src="./src/assets/picture/fb_img.png" alt="" />
            </div>
        </div>
    )
}

export default FeedBack
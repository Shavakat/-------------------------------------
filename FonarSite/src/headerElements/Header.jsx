import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div>
            <header>
                <div className="logo"> <img src="./src/assets/Logo.svg" alt="logo" /></div>
                <nav className="header_nav">
                    <ul>
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">Услуги</a></li>
                        <li><a href="#">Галерея</a></li>
                        <li><a href="#">Мероприятия</a></li>
                    </ul>
                </nav>
                <div className="bntcall"><button type="button">Заказать звонок</button></div>

                <div class="hamburger-menu">
                    <input id="menu__toggle" type="checkbox" />
                    <label class="menu__btn" for="menu__toggle">
                        <span></span>
                    </label>

                    <ul class="menu__box">
                        <li><a class="menu__item" href="#">Главная</a></li>
                        <li><a class="menu__item" href="#">Услуги</a></li>
                        <li><a class="menu__item" href="#">Галерея</a></li>
                        <li><a class="menu__item" href="#">Мероприятия</a></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header
import React from 'react'
import { Outlet, Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <div>
            <header>
                <div className="logo"> <img src="./src/assets/Logo.svg" alt="logo" /></div>
                <nav className="header_nav">
                    <ul>
                        <li><Link to={"/"}><a>Главная</a></Link></li>
                        <li><Link to={"/services"}><a>Услуги</a></Link></li>
                        <li><Link to={"/galery"}><a>Галерея</a></Link></li>
                        <li><Link to={"/post"}><a>Мероприятия</a></Link></li>
                    </ul>
                </nav>
                <div className="bntcall"><button type="button">Заказать звонок</button></div>

                <div class="hamburger-menu">
                    <input id="menu__toggle" type="checkbox" />
                    <label class="menu__btn" for="menu__toggle">
                        <span></span>
                    </label>

                    <ul class="menu__box">
                        <li><Link to={"/"}><a class="menu__item">Главная</a></Link></li>
                        <li><Link to={"/services"}><a class="menu__item">Услуги</a></Link></li>
                        <li><Link to={"/galery"}><a class="menu__item">Галерея</a></Link></li>
                        <li><Link to={"/post"}><a class="menu__item">Мероприятия</a></Link></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header
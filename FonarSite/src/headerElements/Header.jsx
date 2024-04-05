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
            </header>
        </div>
    )
}

export default Header
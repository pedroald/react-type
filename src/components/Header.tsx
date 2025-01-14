import React, {useState} from "react";

import "./Header.css";
import Cart from "../images/cart-icon.png";
import Search from "../images/search-icon.png"



const Header = () => {
    const [openMenu, setOpenMenu] = useState (false);
    const [openCart, setOpenCart] = useState(false);

    const clickOpenCart = () => {
        setOpenMenu(false);
        openCart ? setOpenCart(false) : setOpenCart(true);
    }
    const clickOpenMenu = () => {
       openMenu ? setOpenMenu(false) : setOpenMenu(true);
   }

    return (
    <section>
        <div className="header-desktop-wrapper">
                <div className="header-desktop-wrapper-logo">
                    <a href="/">
                        <h1 className="header-desktop-wrapper-logo-title">Pedro Aldo</h1>
                    </a>
                </div>
                <div className="relative">
                    <div className="header-desktop-wrapper-search">
                        <button type="submit" className="header-desktop-wrapper-search-button">
                            <input className="header-desktop-wrapper-search-input" type="text" placeholder="Buscar..." />
                            <img className="header-desktop-wrapper-search-icon" alt="Buscar icon" src={Search} />
                        </button>
                    </div>
                </div>
                <div className="header-desktop-wrapper-icons">
                    <a href="/" target="_blank" rel="noreferrer">
                        <p className="header-desktop-wrapper-icons-login">ENTRAR</p>
                    </a>
                    <button onClick={clickOpenCart} className="header-desktop-wrapper-icons-cart-button" type="button">
                        <img className="header-desktop-wrapper-icons-cart"src={Cart} alt="Cart" />
                    </button>
                </div>
                <div className={openCart ? "header-desktop-wrapper-cart-open" : "header-desktop-wrapper-cart-closed"}>
                    <div className="header-desktop-cart-content" >
                        <button onClick={clickOpenCart} type="button" className="btn-close">
                            fechar
                        </button>
                        <h2 className="header-desktop-cart-content-title">Seu carrinho está vazio</h2>
                        <p className="header-desktop-cart-content-description">Para continuar comprando, navegue pelas categorias do site ou faça uma busca pelo seu produto.</p>
                    </div>
                </div>
        </div>
        <div className="sub-header-desktop-wrapper"></div>
            <div className="sub-header-desktop-info">
                <a href="/" target="_blank" rel='noreferrer'>
                    <h2 className="sub-header-desktop-info-text sub-header-desktop-info-text-01">CURSOS</h2>
                </a>
                <a href="/" target="_blank" rel='noreferrer'>
                    <h2 className="sub-header-desktop-info-text" >SAIBA MAIS</h2>
                </a>
            </div>
           <div className={openMenu ? "header-mobile-wrapper-menu-active" : "header-mobile-wrapper"}>
                <div className="header-mobile-title">
                    <button onClick={clickOpenMenu} className="header-mobile-menu">
                            <div className={openMenu ? "menu-icon-open menu-icon-open-line1" : "menu-icon-closed"}></div>
                            <div className={openMenu ? "menu-icon-open menu-icon-open-line1" : "menu-icon-closed"}></div>
                            <div className={openMenu ? "menu-icon-open menu-icon-open-line2" : "menu-icon-closed"}></div>
                    </button>
                    <div className={openMenu ? "background-active" : "background-disabled"}>
                        <div className={openMenu ? "menu-active" : "menu-disabled"}>
                            <h5 className="menu-titles menu-titles-line1" >Entrar</h5>
                            <h5 className="menu-titles menu-titles-line2" >Cursos</h5>
                            <h5 className="menu-titles" >Saiba Mais</h5>
                        </div>
                    </div>
                    <div className="header-mobile-logo">
                    <a href="/">    <h1 className="header-mobile-wrapper-logo-title">Pedro Aldo</h1></a>
                    </div>
                    <button onClick={clickOpenCart} className="header-mobile-wrapper-icons-cart-button" type="button">
                        <img className="header-mobile-wrapper-icons-cart"src={Cart} alt="Cart" />
                    </button>
                </div>
                <div className={openCart ? "header-desktop-wrapper-cart-open" : "header-desktop-wrapper-cart-closed"}>
                    <div className="header-desktop-cart-content" >
                        <button onClick={clickOpenCart} type="button" className="btn-close">
                            fechar
                        </button>
                        <h2 className="header-desktop-cart-content-title">Seu carrinho está vazio</h2>
                        <p className="header-desktop-cart-content-description">Para continuar comprando, navegue pelas categorias do site ou faça uma busca pelo seu produto.</p>
                    </div>
                </div>
                    <div className="header-mobile-wrapper-search">
                        <input className="header-mobile-wrapper-search-input" type="text" name="input-mobile" placeholder="Buscar..." />
                        <a href="/">
                                <img className="header-mobile-wrapper-search-icon" alt="Search" src={Search} />
                            </a>
                    </div>

           </div>
    </section>
)}

export {Header};

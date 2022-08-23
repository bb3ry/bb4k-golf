import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { menuData } from '../../data/menuData'
import { Nav, NavbarContainer, NavLogo, NavLink, MobileIcon, NavItem, NavMenu, NavBtn } from "./NavbarElements"
import { StaticImage } from 'gatsby-plugin-image'
import { Button } from '../Button'
const Navbar = () => {


    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleClick = () => setClick(!click)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener("scroll", changeNav)
    }, [])

    return (
        <>
            <IconContext.Provider value={{ color: "#141414" }}>
                <Nav active={scroll} click={click}>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <StaticImage objectFit="contain" src="../../images/logo.png" alt="Building Blocks for Kids" />
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes color="#6660A9" /> : <FaBars color="#6660A9" />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            {menuData.map((item, index) => (
                                <NavItem key={index}>
                                    <NavLink to={item.link}>
                                        {item.title}
                                    </NavLink>
                                </NavItem>
                            ))} <NavBtn>
                                <Button primary="true" round="true" to="/register">Signup to Golf</Button>
                            </NavBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
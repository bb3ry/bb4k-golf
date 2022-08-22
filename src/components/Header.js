import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { menuData } from '../data/menuData'
import { Button } from './Button'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
const Header = () => {
    const data = useStaticQuery(graphql`
    query Logo {
        contentfulLogo {
          logo {
            gatsbyImageData
          }
          alt
        }
      }
`)
    const image = getImage(data.contentfulLogo.logo)
    return (
        <Nav>
            <NavLink to="/"><GatsbyImage image={image} alt={data.contentfulLogo.alt}></GatsbyImage></NavLink>
            <Bars />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavLink to={item.link} key={index}>
                        {item.title}
                    </NavLink>

                ))}
            </NavMenu>
            <NavBtn>
                <Button primary="true" round="true" to="/register">Signup to Golf</Button>
            </NavBtn>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc ((100vw-1300px) / 2);
z-index: 100;
position: relative;
`
const NavLink = styled(Link)`
color: white;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
`

const Bars = styled(FaBars)`
display:none;
color: #FFF;

@media screen and (max-width: 768px){
    display:block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
}
`
const NavMenu = styled.div`
display: flex;
align-items: center;

@media screen and (max-width:768px) {
    display: none;
}
`
const NavBtn = styled.div`
display:flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px){
    display:none;
}
`
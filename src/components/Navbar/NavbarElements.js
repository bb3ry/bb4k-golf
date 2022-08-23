import styled from 'styled-components'
import { DiScala } from "react-icons/di"
import { Link } from "gatsby"

export const Nav = styled.nav`
 background: rgb(240, 240, 240);
 height: 80px;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 1rem;
 position: sticky;
 top: 0;
 z-index: 999;
 -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
 -moz-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
 box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
 @media screen and (max-width: 960px){
    background: rgb(240, 240, 240);
    transition: 0.8s all ease;
 }
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
max-width: 1000px;
`

export const NavLogo = styled(Link)`
justify-self: flex-start:
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
`

export const NavIcon = styled(DiScala)`
margin: 0 0.5rem 0 2rem;
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
background: rgb(240, 240, 240);
@media screen and (max-width: 960px){
    display:flex;
    flex-direction: column;
    width:100%;
    height: ${({ click }) => (click ? "90vh" : "0")};
    position: absolute;
    top:${({ click }) => (click ? "100%" : "-1000px")};
    opacity: 1;
    transition: all 0.2s ease;

}
`
export const NavItem = styled.li`
height: 80px;

@media screen and (max-width: 960px){
width: 100%;
}
`
export const NavLink = styled(Link)`
color: #6660A9;
align-items: center;
display: flex;
text-decoration: none;
height: 100%;
font-weight: 700;
padding-left: 1rem;

&:hover {
    color: #ad3181;
    transition: all 0.3s ease;
}
@media screen and (max-width: 960px){
    text-align: center;
    display:table;
    width:100%;
    padding: 2rem;
    color: #6660A9;

    &:hover {
        color: #6660A9;
        transition: all 0.3s ease;
    }
}
`
export const NavBtn = styled.div`
display:flex;
align-items: center;
padding-left: 24px;

@media screen and (max-width: 768px){
    display:none;
}
`
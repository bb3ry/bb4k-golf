import * as React from 'react'
import Footer from "./Footer"
import { GlobalStyle } from "./styles/globalStyles"
import Navbar from './Navbar'


const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )

}

export default Layout 
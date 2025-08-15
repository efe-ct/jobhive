import React from 'react'
import './Navbar.css'
import reactLogo from '../assets/react.svg'
import { navBarContent } from '../data/content'
import { Link, LinkEmphasized, SearchButton } from './UIComponents'



const Navbar = () => {
    return (
        <header className="">
            <div className="navbar" style={{fontSize: ""}}>
                <span className="pointer">
                    <img src={reactLogo} alt="" />
                    <span>JobHive</span>
                </span>

                {/* <SearchButton /> */}
                <nav className="navbar__links" >
                    {navBarContent.map((link) => (
                        <Link href="" title={link.title} />
                    ))}
                    <LinkEmphasized color="black" href="" title="Apply Now" />
                    <LinkEmphasized color="white" href="" title="Contact Us" />
                </nav>
            </div>
        </header>
    )
}

export default Navbar
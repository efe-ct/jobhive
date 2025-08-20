import '@/components/Navbar.css'
import { navBarContent } from '@/data/content'
import { Links, LinkEmphasized, SearchButton, Logo } from '@/components/UIComponents'
import { useRef } from 'react'



const Navbar = () => {

    const sidebar = useRef(null);
    function showSidebar() {
        sidebar.current.classList.add('open')
    }
    function closeSidebar() {
        sidebar.current.classList.remove('open')
    }

    return (
        <nav style={{ fontSize: "1.2rem" }}>
            <Logo />
            <div className="navLinks">
                {navBarContent.map((link) => (
                    <Links isMobile={true} href={link.path} key={link.id} title={link.title} />
                ))}
                <LinkEmphasized isMobile={true} color="black" href="" title="Apply Now" />
                {/* <LinkEmphasized onClick={closeSidebar} color="white" href="" title="Contact Us" /> */}
                <svg onClick={showSidebar} className="pointer menu__button" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
            </div>
            <div ref={sidebar} className="navLinks sidebar">
                <svg style={{ position: 'absolute', top: '18px', right: '30px' }} onClick={closeSidebar} className="pointer" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                {navBarContent.map((link) => (
                    <Links onClick={closeSidebar} href={link.path} key={link.id} title={link.title} />
                ))}
                <LinkEmphasized onClick={closeSidebar} color="black" href="" title="Apply Now" />
            </div>
        </nav >
    )
}

export default Navbar
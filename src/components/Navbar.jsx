import '@/components/Navbar.css'
import reactLogo from '../assets/react.svg'
import { navBarContent } from '@/data/content'
import { Link, LinkEmphasized, SearchButton, Logo } from '@/components/UIComponents'
import { useRef } from 'react'



const Navbar = ({ onNavigate }) => {


    // const sidebar = document.querySelector('.sidebar')
    // function showSidebar() {
    //     sidebar.style.display = 'flex'
    // }
    // function closeSidebar() {
    //     sidebar.style.display = 'none'
    // }
    
    const sidebar = useRef(null);
    function showSidebar() {
        sidebar.current.style.display = 'flex'
    }
    function closeSidebar() {
        sidebar.current.style.display = 'none'
    }
    
    


    return (
        <nav style={{ fontSize: "1.2rem" }}>
            <Logo />
            <div className="navLinks">
                {navBarContent.map((link) => (
                    <Link isMobile={true} onNavigate={onNavigate} href={link.path} key={link.id} title={link.title} />
                ))}
                <LinkEmphasized isMobile={true} color="black" href="" title="Apply Now" />
                <LinkEmphasized isMobile={true} color="white" href="" title="Contact Us" />
                <svg onClick={showSidebar} className="pointer menu__button" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </div>
            <div ref={sidebar} className="navLinks sidebar">
                <svg style={{position: 'absolute' , top: '0', right: '0', margin: '10px'}} onClick={closeSidebar} className="pointer" xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                {navBarContent.map((link) => (
                    <Link onNavigate={onNavigate} href={link.path} key={link.id} title={link.title} />
                ))}
                <LinkEmphasized color="black" href="" title="Apply Now" />
                <LinkEmphasized color="white" href="" title="Contact Us" />
            </div>
            {/* </nav> */}
        </nav >
    )
}

export default Navbar
import '@/components/Navbar.css'
import reactLogo from '../assets/react.svg'
import { navBarContent } from '@/data/content'
import { Link, LinkEmphasized, SearchButton, Logo } from '@/components/UIComponents'



const Navbar = ({ onNavigate }) => {
    return (
        <header className="">
            <div className="navbar" style={{ fontSize: "1.2rem" }}>
                <span className="pointer">
                    <Logo />
                    <span>JobHive</span>
                </span>

                {/* <SearchButton /> */}
                <nav className="navbar__links" >
                    {navBarContent.map((link) => (
                        <Link onNavigate={onNavigate} href={link.path} key={link.id} title={link.title} />
                    ))}
                    <LinkEmphasized color="black" href="" title="Apply Now" />
                    <LinkEmphasized color="white" href="" title="Contact Us" />
                </nav>
            </div>
        </header>
    )
}

export default Navbar
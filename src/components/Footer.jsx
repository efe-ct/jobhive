import './Footer.css'
import { Logo, Links } from "@/components/UIComponents.jsx";

const Footer = () => {
    // Data-driven sections for easy edits and i18n later
    const sections = [
        {
            heading: 'Product',
            items: [
                { title: 'Home', path: '/home' },
                { title: 'Jobs', path: '/jobs' },
                { title: 'About', path: '/about' },
                { title: 'Contact', path: '/contact' },
            ],
        },
        {
            heading: 'Product',
            items: [
                { title: 'Home', path: '/home' },
                { title: 'Jobs', path: '/jobs' },
                { title: 'About', path: '/about' },
                { title: 'Contact', path: '/contact' },
            ],
        },
        {
            heading: 'Product',
            items: [
                { title: 'Home', path: '/home' },
                { title: 'Jobs', path: '/jobs' },
                { title: 'About', path: '/about' },
                { title: 'Contact', path: '/contact' },
            ],
        },
        {
            heading: 'Product',
            items: [
                { title: 'Home', path: '/home' },
                { title: 'Jobs', path: '/jobs' },
                { title: 'About', path: '/about' },
                { title: 'Contact', path: '/contact' },
            ],
        },
    ];

    
    return (
        <footer className="customFooter" role="contentinfo">
            <div className="footerInner">
                <div className="footerHead">
                    <Logo color="white" size={44} />
                </div>

                {/* dynamic links */}
                <div className="footerGrid" role="navigation" aria-label="Footer">
                    {sections.map((section) => (
                        <div className="footerColumn" key={section.heading}>
                            <h4 className="footerHeading">{section.heading}</h4>
                            <ul className="footerLinks">
                                {section.items.map((items) => (
                                    <li key={items.title}>
                                        {/* Use UI Links component for internal navigation */}
                                        <Links href={items.path} title={items.title} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom: legal */}
                <div className="footerBottom">
                    <p className="copyright">&copy; {new Date().getFullYear()} JobHive&trade; - Aptech Project. All rights reserved.</p>
                    <ul className="externalLinks">
                        <li><a href="https://github.com/efe-ct/jobhive/" target="_blank">Github Repo</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer

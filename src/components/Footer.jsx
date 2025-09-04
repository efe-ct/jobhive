import { Logo } from './ui';
import { Button } from './ui';

const Footer = () => {
  const footerSections = [
    {
      title: 'HOMEPAGE',
      links: ['Home', 'Contact Us', 'About Us', 'Jobs', 'Feedback'],
    },
    {
      title: 'JOB FILTERS',
      links: ['Location', 'Salary', 'Alphabetical', 'Jobs'],
    },
    {
      title: 'JOB CATEGORY',
      links: ['Marketing', 'Public Sector', 'Finance', 'Marketing'],
    },
  ];

  return (
    <div className="footer">
      <div className="logo-parent">
        <Logo />
        <div className="footer-grid-item-parent">
          {footerSections.map((section, idx) => (
            <div className="footer-footer-grid-item" key={idx}>
              <b className="footer-link-title">{section.title}</b>
              <div className="footer-link-wrapper">
                <div className="footer-link">
                  {section.links.map((link, i) => {
                    let to = '#';
                    if (section.title === 'HOMEPAGE') {
                      to = link === 'Home' ? '/' : link === 'Contact Us' ? '/contact' : link === 'About Us' ? '/about' : link === 'Feedback' ? '/feedback' : '/jobs';
                    } else if (section.title === 'JOB FILTERS') {
                      to = link === 'Alphabetical' ? '/jobs?sort=az' : link === 'Salary' ? '/jobs?sort=salary-desc' : link === 'Location' ? '/jobs?focus=loc' : '/jobs';
                    } else if (section.title === 'JOB CATEGORY') {
                      const cat = encodeURIComponent(link);
                      to = `/jobs?cat=${cat}`;
                    }
                    return (
                      <Button key={i} type="link" isLink to={to} onFooter>
                        {link}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-child"></div>
    </div>
  );
};

export default Footer;

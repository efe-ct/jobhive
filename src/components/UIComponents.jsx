import { Link } from 'react-router-dom'
import './UIComponents.css'
import logo from '/logo.svg'

export const Logo = () => {
    return (
        <Link to="/home" className="logo">
            <img src={logo} alt="logo" />
            <span style={{fontWeight: '600'}}>JobHive</span>
        </Link>
    )
}

export const Links = ({ href, title, isMobile, onClick }) => {


    return (
        <Link to={href} onClick={onClick} className={`styledLink ${isMobile ? 'isMobile' : ''}`}>{title}</Link>
    )
}

export const LinkEmphasized = ({ href, title, color, style, isMobile, onClick }) => {
    const LinkEmphasizedOptions = `styledLinkEmphasized ${isMobile ? 'isMobile' : ''} ${color === 'black' ? 'black' : color === 'white' ? 'white' : ''}`;
    return (
        <Link to={href} onClick={onClick} style={style} className={LinkEmphasizedOptions} >
            <span className="LinkEmpasizedAnimation">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true" class="btn-builtin-icon css-bni7vm"><path fill="currentColor" fill-rule="evenodd" d="M12.522 4.25 20 12l-7.478 7.75-.733-.709 6.302-6.531H4v-1.02h14.09L11.79 4.959z" clip-rule="evenodd"></path></svg> */}
                <span>{title}</span>
            </span>
        </Link>
    )
}

export const SearchButton = ({ onSearch }) => {

    const handleSubmit = (e) => {
        e.preventDefault();


        const formData = new FormData(e.currentTarget);

        const query = formData.get('search');
        console.log("You searched for: " + query);

        if (onSearch) {
            onSearch(query);
        }
    }


    return (
        <form onSubmit={handleSubmit} style={{ width: '30vw', display: 'inline-block' }}>
            <input className="searchButton" type="text" name='search' placeholder="Search for Jobs, Companies or keywords..." />
            {/* <button type='submit'>Submit</button> if there is need for a button */}
        </form>
    )
}

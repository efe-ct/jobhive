import './UIComponents.css'
import logo from '/logo.svg'

export const Logo = () => {
    return(
        <img className="logo" src={logo} alt="" />
    )
}

export const Link = ({ href, title, onNavigate }) => {
    const handleClick = (e) => {
        e.preventDefault();
    
        if(onNavigate) {
            onNavigate(href);
        }
    }
    

    return (
        <span style={{cursor: 'pointer'}} onClick={handleClick} className="styledLink" href={href}>{title}</span>
        // <a onClick={navigation} className="styledLink" href={href}>{title}</a>
    )
}

export const LinkEmphasized = ({ href, title , color, style }) => {
    const LinkEmphasizedOptions = `styledLinkEmphasized ${color === 'black' ? 'black' : color === 'white' ? 'white' : ''}`;
    return (
        <a style={style} className={LinkEmphasizedOptions} href={href}>
            <span className="LinkEmpasizedAnimation">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true" class="btn-builtin-icon css-bni7vm"><path fill="currentColor" fill-rule="evenodd" d="M12.522 4.25 20 12l-7.478 7.75-.733-.709 6.302-6.531H4v-1.02h14.09L11.79 4.959z" clip-rule="evenodd"></path></svg> */}
                <span>{title}</span>
            </span>
        </a>
    )
}

export const SearchButton = ( {onSearch} ) => {

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
        <form onSubmit={handleSubmit} style={{ width: '30vw', display: 'inline-block'}}>
            <input className="searchButton" type="text" name='search' placeholder="Search for Jobs, Companies or keywords..." />  
            {/* <button type='submit'>Submit</button> if there is need for a button */} 
        </form>
    )
}

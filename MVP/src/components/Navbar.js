const Navbar = () => {
    const handleClick = (e) => {
        window.location.href = "http://localhost:3000/post";
    }

    return (  
        <nav className = "navbar">
            <a className = "logo" href="/">
                <img src="brhLogo.png" alt="Logo"></img>
            </a>
            <div className="links">
                <button class="button-24" role="button" onClick={(e) => handleClick(e)}>+ Post a Job</button>
                <a className = "clickable" href="/messages">messages</a>
                <a className = "clickable" href="/profile">profile</a>
            </div>
        </nav>

    );
}
 
export default Navbar;
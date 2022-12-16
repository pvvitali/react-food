import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="teal lighten-2">
            <div className="nav-wrapper">
            <Link to='/' className="brand-logo">Foods</Link>
            {/* <a href="#!" className="brand-logo">React shop</a> */}
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='about'>About</Link></li>
                {/* todo change category */}
                <li><Link to='category'>Category</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Header;
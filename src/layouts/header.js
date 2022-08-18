import logo from '../assets/icons/starwars_logo.png';

const Header = ({ children }) => {
    return (
        <header>
            <div className="top-header"></div>
            <img src={logo} alt="logo" />
            <p>Star Wars Movies...</p>
        </header>
    )
};

export default Header;
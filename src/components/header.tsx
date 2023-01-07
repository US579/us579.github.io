import { Link } from "react-router-dom";

import { LogoIcon, MoonIcon } from "./assets/icons";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo-wrapper">
                    <div className="logo">
                    <Link to="/">
                        <LogoIcon />
                    </Link>
                        <span></span>
                    </div>
                    <Link to="/about">
                        <button className="icon">
                            <MoonIcon />
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;

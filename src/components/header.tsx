import { LogoIcon, MoonIcon } from './assets/icons';
const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo-wrapper">
                    <div className="logo">
                        <LogoIcon />
                        <span>steven blog</span>
                    </div>
                    <button className='icon'><MoonIcon /></button>
                </div>
            </div>
        </header>
    );
};

export default Header;

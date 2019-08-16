import React from 'react';
import '../../sass/main.scss';
import Logo from  './logo'
import Menu from './menu'
import Index from './widget'

class Header extends React.Component {
    render(){
        return (
            <header className="header">
                <Logo/>
                <Menu/>
                <Index/>
            </header>
    )}
}

export default Header;

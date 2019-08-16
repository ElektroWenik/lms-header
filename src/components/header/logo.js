import React from 'react';
import logo from  '../../images/logotype.svg'

class Logo extends React.Component {
    render() {
        return (
            <div className="header__logo">
                <img src={logo} alt="logo"/>
            </div>
    )}
}

export default Logo;

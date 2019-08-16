import React from 'react';

class Unauthenticated extends React.Component {
    render(){
        const { onClick } = this.props;
        return (
            <div className="header__widget-unauthenticated">
                <button onClick={onClick} className="header__widget-unauthenticated-login-btn">
                    Вход
                </button>
                <button className="header__widget-unauthenticated-register-btn">
                    Регистрация
                </button>
            </div>
        )}
}

export default Unauthenticated;

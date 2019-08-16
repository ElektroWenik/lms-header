import React from 'react';
import SVG from 'react-inlinesvg';
import logout from '../../images/icons/16px/logout.svg';
import enhanceWithClickOutside from 'react-click-outside';

class DropDownMenu extends React.Component {
    handleClickOutside() {
        this.props.close();
    }
    render(){
        return (
            this.props.show &&
            <ul className="header__widget-authenticated-menu-dropdown-list">
                <div className="header__widget-authenticated-menu-dropdown-list-corner"/>
                <li className="header__widget-authenticated-menu-dropdown-list-item">Настройки профиля</li>
                <li className="header__widget-authenticated-menu-dropdown-list-item">Мои покупки</li>
                <li className="header__widget-authenticated-menu-dropdown-list-item">Мои подписки</li>
                <li className="header__widget-authenticated-menu-dropdown-list-item">Служба поддержки</li>
                <div className="header__widget-authenticated-menu-dropdown-list-separator"/>
                <li className="header__widget-authenticated-menu-dropdown-list-item">
                    <SVG src={logout}/>
                    Выйти
                </li>
            </ul>
        ) };
}

export default enhanceWithClickOutside(DropDownMenu);

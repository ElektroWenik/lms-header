import React from 'react';
import { NavLink } from 'react-router-dom';
import SVG from 'react-inlinesvg';

class MenuItem extends React.Component {

    render(){
        return (
            <NavLink exact={this.props.exact} to={this.props.path} className="header__menu-item" activeClassName="header__menu-item--active">
                <div className="header__menu-item-icon">
                    <SVG src={this.props.icon}/>
                    {this.props.notificationCount && <div className="header__menu-item-notification">{this.props.notificationCount}</div>}
                </div>
                <span className="header__menu-item-label">{this.props.label}</span>
                <div className="header__menu-item-line"/>
            </NavLink>
    ) };
}

export default MenuItem;

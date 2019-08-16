import React from 'react';
import avatar from '../../../images/avatar.jpg';
import SVG from 'react-inlinesvg';
import DropDownMenu from '../../partials/dropDownMenu';

// icons
import bell from '../../../images/icons/24px/bell.svg';

class Authenticated extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showDropDown: false
        };
    }

    showDropDown(){
        this.setState({
            showDropDown: true
        });
    }
    closeDropDown(){
        this.setState({
            showDropDown: false
        });
    }
    render(){
        return (
            <div className="header__widget-authenticated">
                <div className="header__widget-authenticated-user">
                    <div className="header__widget-authenticated-user-avatar" style={{backgroundImage: `url(${avatar})` }}/>
                    <div className="header__widget-authenticated-user-info">
                        <div className="header__widget-authenticated-user-name">
                            Виолетта фон Вейссенберг
                        </div>
                        <div className="header__widget-authenticated-user-status header__widget-authenticated-user-status--gold-user">
                            статус:
                            <span className="header__widget-authenticated-user-status-value">
                                Gold User
                            </span>
                        </div>
                    </div>
                </div>
                <div className="header__widget-authenticated-menu">
                    <div className="header__widget-authenticated-menu-notification">
                        <div className="header__widget-authenticated-menu-notification-icon">
                            <SVG src={bell}/>
                            <div className="header__widget-authenticated-menu-notification-icon-counter">2</div>
                        </div>
                        <div className="header__widget-authenticated-menu-separator"/>
                    </div>
                    <div className="header__widget-authenticated-menu-balance">
                        <span className="header__widget-authenticated-menu-balance-value">250</span>
                        <div className="header__widget-authenticated-menu-separator"/>
                    </div>
                    <div className="header__widget-authenticated-menu-dropdown">
                        <div className="header__widget-authenticated-menu-dropdown-button" onClick={this.showDropDown.bind(this)}>
                            <div className="header__widget-authenticated-menu-dropdown-button-dot"/>
                            <div className="header__widget-authenticated-menu-dropdown-button-dot"/>
                            <div className="header__widget-authenticated-menu-dropdown-button-dot"/>
                        </div>
                        <DropDownMenu close={this.closeDropDown.bind(this)} show={this.state.showDropDown}/>
                    </div>
                </div>
            </div>
        )}
}

export default Authenticated;

import React from 'react';
import MenuItem from '../partials/menuItem';

// Icons
import journalIcon from '../../images/icons/24px/journal.svg';
import communityIcon from '../../images/icons/24px/talks.svg';
import calendarIcon from '../../images/icons/24px/calendar.svg';
import shopIcon from '../../images/icons/24px/shop.svg';
import achievementsIcon from '../../images/icons/24px/progress.svg';


class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            linkList: [
                {
                    path: '/journal',
                    label: 'Журнал',
                    icon: journalIcon,
                    exact: true
                },
                {
                    path: '/community',
                    label: 'Общение',
                    icon: communityIcon,
                    notificationCount: 2
                },
                {
                    path: '/calendar',
                    label: 'Календарь',
                    icon: calendarIcon
                },
                {
                    path: '/shop',
                    label: 'Магазин',
                    icon: shopIcon,
                    notificationCount: 2
                },
                {
                    path: '/achievements',
                    label: 'Достижения',
                    icon: achievementsIcon
                },
            ]
        };
    }
    render(){
        return (
            <nav className="header__menu">
                {this.state.linkList.map((link, index) => (<MenuItem key={index} exact={link.exact} notificationCount={link.notificationCount} icon={link.icon} path={link.path} label={link.label} />))}
            </nav>
    )};
}

export default Menu;

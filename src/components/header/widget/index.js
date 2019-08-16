import React from 'react';
import { connect } from 'react-redux';
import Authenticated from './authenticated'
import Unauthenticated from './unauthenticated'

class Widget extends React.Component {
    render(){
        return (
            <div className="header__widget">
                { this.props.authenticated ? <Authenticated/> : <Unauthenticated onClick={this.props.login}/> }
            </div>
    )}
}

export default connect(
    state => ({ authenticated: state.login.authenticated }),
    dispatch => {
        return {
            login: () => {
                dispatch({ type: 'LOGGED', payload: true })
            }
        }
    }
)(Widget);

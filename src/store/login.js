import { LOGGED } from './actionTypes'

const initialState = {
    authenticated: false
};

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGGED:
            return { ...state, authenticated: action.payload };
        default:
            return state;
    }
};

export default loginReducer;
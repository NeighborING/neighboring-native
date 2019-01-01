import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false,
    profile: {}
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.AUTH_CHECK:
            return {...state, auth: action.payload.data};


        case types.SIGN_OUT:
            location.reload()
            return {...state, auth: action.payload.data};


        case types.GET_PROFILE:
            return {...state, profile: action.payload.data};


        default:
            return state
    }
}

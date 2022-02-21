import { SET_ADDRESS, SET_EMAIL, SET_NAME, SET_NOTE, SET_PHONE, STATE_ADDRESS, STATE_EMAIL, STATE_NAME, STATE_PHONE } from "."

export const reducer = (state, action) => {
    const {type, payload} = action
    switch(type){
        case SET_NAME: return {
            ...state,
            sName: payload,
            stateName: {...state.stateName, isInput: 1, message: ''}
        }
        case STATE_NAME: return {
            ...state,
            stateName: payload
        }
        case SET_ADDRESS: return {
            ...state,
            sAddress: payload,
            stateAddress: {...state.stateName, isInput: 1, message: ''}
        }
        case STATE_ADDRESS: return {
            ...state,
            stateAddress: payload
        }
        case SET_EMAIL: return {
            ...state,
            sEmail: payload,
            stateEmail: {...state.stateName, isInput: 1, message: ''}
        }
        case STATE_EMAIL: return {
            ...state,
            stateEmail: payload
        }
        case SET_PHONE: {
            if(Number(payload) || Number(payload)===0){
                return {
                    ...state,
                    sPhone: payload.trim(),
                    statePhone: {...state.stateName, isInput: 1, message: ''}
                }
            }else{
                return state
            }
        }
        case STATE_PHONE: return {
            ...state,
            statePhone: payload
        }
        case SET_NOTE: return {
            ...state,
            sNote: payload
        }
        default: return state
    }
}
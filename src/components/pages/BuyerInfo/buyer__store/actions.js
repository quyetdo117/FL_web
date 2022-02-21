import { STATE_ADDRESS, STATE_EMAIL, STATE_NAME, STATE_PHONE } from ".";
import { SET_ADDRESS, SET_EMAIL, SET_NAME, SET_NOTE, SET_PHONE } from "./constants";

const setName = payload => (
    {
        type: SET_NAME,
        payload
    }
)

const setStateName = payload => (
    {
        type: STATE_NAME,
        payload
    }
)

const setAddress = payload => (
    {
        type: SET_ADDRESS,
        payload
    }
)

const setStateAddress = payload => (
    {
        type: STATE_ADDRESS,
        payload
    }
)

const setEmail = payload => (
    {
        type: SET_EMAIL,
        payload
    }
)

const setStateEmail = payload => (
    {
        type: STATE_EMAIL,
        payload
    }
)

const setPhone = payload => (
    {
        type: SET_PHONE,
        payload
    }
)

const setStatePhone = payload => {
    return {
        type: STATE_PHONE,
        payload
    }
}

const setNote = payload => (
    {
        type: SET_NOTE,
        payload
    }
)

export { setName, setStateName,
     setAddress, setStateAddress,
    setEmail, setStateEmail,
     setPhone, setStatePhone, setNote }

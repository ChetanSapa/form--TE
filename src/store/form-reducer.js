const SEND_DATA = 'SEND_DATA'
const SET_NEW_DATA = 'SET_NEW_DATA'
const initialState = {
    dataLayer: "",
    primaryColor: "",
    borderRadius: '',
    dismissible: false,
    dismissType: "text",
    expiration: 365,
    closeType: "cross"
}
const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_DATA:
            return {...state,
                dataLayer: action.payload[0],
                primaryColor: action.payload[1],
                borderRadius: action.payload[2],
                dismissible: action.payload[3],
                dismissType: action.payload[4],
                expiration: action.payload[5],
                closeType: action.payload[6],
            }
        default:
            return state
    }
}
export const sendData = (data) => ({type: SEND_DATA, payload: data})
export const setNewData = (newData) => ({type: SET_NEW_DATA, payload: newData})
export default formReducer;
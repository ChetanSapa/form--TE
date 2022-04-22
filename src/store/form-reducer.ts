const SET_NEW_DATA = 'SET_NEW_DATA'

type FormState = {
    formData: {
        dataLayer?: string,
        darkMode?: boolean,
        primaryColor: string,
        borderRadius: number,
        dismissible: boolean,
        dismissType: string,
        expiration: number,
        closeType?: string
    }
}

const initialState: FormState = {
    formData: {
        dataLayer: "dataLayer",
        darkMode: true,
        primaryColor: "#f98305",
        borderRadius: 6,
        dismissible: false,
        dismissType: "text",
        expiration: 365,
        closeType: "cross"
    }
}
const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_DATA:
            return {
                ...state, formData: action.payload
            }
        default:
            return state
    }
}
export const setNewData = (newData) => ({type: SET_NEW_DATA, payload: newData})
export default formReducer;
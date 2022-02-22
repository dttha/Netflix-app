import { GET_ACCOUNT_FAIL, GET_ACCOUNT_SUCCESS, HIDE_LOADING, SHOW_LOADING } from "../constants"

const initialState = {
    isLogin: false,
    user: null,
    isLoading: false
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case HIDE_LOADING: {
            return {
                ...state,
                isLoading: false
            }
        }
        case GET_ACCOUNT_SUCCESS: {
            return {
                ...state,
                user: action.payload,
                isLogin: true
            }
        }
        case GET_ACCOUNT_FAIL: {
            return {
                ...state,
                user: action.payload,
                isLogin: false
            }
        }
    }
    return state
}

export default userReducer
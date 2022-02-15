import { HIDE_LOADING, SHOW_LOADING } from "../constants"

const initialState = {
    isLogin: false,
    userId: null,
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
    }
    return state
}

export default userReducer
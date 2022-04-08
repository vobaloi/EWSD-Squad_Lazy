export const authReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'SET_AUTH':
            return {
                ...state
            }
        case 'USERS_LOAD_SUCCESS':
            return {
                ...state,
                Users: payload,
                authLoading: false
            }
        case 'USERS_LOAD_FAIL':
            return {
                ...state,
                Users: [],
                authLoading: false
            }
        default:
            return state
    }
}
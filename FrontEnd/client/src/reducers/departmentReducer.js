export const departmentReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'DEPARTMENT_LOAD_SUCCESS':
            return {
                ...state,
                departments: payload,
                departmentsLoading: false
            }
        case 'DEPARTMENT_LOAD_FAIL':
            return {
                ...state,
                departments: [],
                departmentsLoading: false
            }
        default:
            return state
    }
}
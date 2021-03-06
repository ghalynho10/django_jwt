import * as actionTypes from '../actions/actionTypes'


const initialState = {
    token: null,
    loading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true
            }

        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.idToken,
                loading: false
            }
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
    }

}

export default reducer
type AuthType = {
    token: string
}

type ActionType = SetUserDataAT

let initialState: AuthType = {
    token: ""
}


export const authReducer = (state: AuthType = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}
//--------------------------------------SET-USER-DATA--------------------------------
const SET_USER_DATA = "SET_USER_DATA"
export type SetUserDataAT = {
    type: typeof SET_USER_DATA
    payload: AuthType
}
export const setAuthUserData = ({token}: AuthType): SetUserDataAT => ({
    type: SET_USER_DATA,
    payload: {token}
})

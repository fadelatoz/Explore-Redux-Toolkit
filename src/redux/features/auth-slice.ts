import { createSlice,PayloadAction } from "@reduxjs/toolkit";


interface AuthState{
    isAuth : boolean,
    username : string,
    uid : string,
    isModerator : boolean
}

type initialState = {
    value : AuthState
}


const initialState = {
    value : {
        isAuth : false,
        username : '',
        uid : '',
        isModerator : false
    } as AuthState,

} as initialState


export const auth = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        logOut:() => {
            return initialState
        },
        logIn : (state,action : PayloadAction<string>) => {
            return {
                value : {
                    isAuth : true,
                    username : action.payload,
                    uid : '12312sasxsda2431242',
                    isModerator : false
                }
            }
        },
        toogleModerator : (state) => {
            state.value.isModerator = !state.value.isModerator
        }
    } 
})


export const {logIn,logOut,toogleModerator} = auth.actions
export default auth.reducer
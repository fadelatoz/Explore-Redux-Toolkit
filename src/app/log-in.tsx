"use client"

import { useState } from "react"
import { logIn,logOut,toogleModerator } from "@/redux/features/auth-slice"
import {useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"



export default function Login(){

    const [userName,setUsername] = useState<string | any>()

    const [isModerator,setIsModerator] = useState<boolean|any>(false)

    const dispatch = useDispatch<AppDispatch>()

    const onClickLogin = () => {
        dispatch(logIn(userName))
    }

    const onClickToggle = () => {
        dispatch(toogleModerator())
    }
    const onClickLogOut = () => {
        dispatch(logOut(userName))
    }


    return(

        <div>
            <input type="text" onChange={(e : any) => setUsername(e.target.value)}/>

            <br></br>
            <button onClick={onClickLogin}>Login</button>

            <br></br>
            <button onClick={onClickLogOut}>Log out</button>

            <br></br>
            <button onClick={onClickToggle}>Toggle Moderator</button>
        </div>
    )

}
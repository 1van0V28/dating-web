"use client"


import { useState, useEffect } from "react"
import { profileStateContext, profileDispatchContext } from "@/pages/context/profileContext"
import Header from "@/entities/Header"
import Editor from "@/entities/Editor"
import styles from "@/pages/styles/Profile.module.css"


export default function Profile() {
    const [profileState, setProfileState] = useState("")
    // тестируем отображение текста при помощи запроса в TextInfo
    useEffect(() => {
        fetch("https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes", {
            method: "GET",
            headers: {
                "x-rapidapi-host": "jokes-by-api-ninjas.p.rapidapi.com",
                "x-rapidapi-key": "23876cd805msh01466ad42d73facp15f893jsn1fdfaa2a516a"
            }
        })
        .then((response) => response.json())
        .then((data) => {
            setProfileState(data[0].joke)
        })
        .catch((error) => {console.log(error)})
    }, [])


    function dispatchProfileContext(newProfileState: string) {
        setProfileState(newProfileState)
    }
    

    return (
        <>
            <></>
            <div className={styles.container_header}>
                <Header/>
            </div>
            <div className={styles.container_editor}>

                <profileStateContext.Provider value={profileState}>
                    <profileDispatchContext.Provider value={dispatchProfileContext}>
                        
                        <Editor />

                    </profileDispatchContext.Provider>
                </profileStateContext.Provider>

            </div>
        </>
    )
}
"use client"


import { useState, useEffect } from "react"
import { mainStateContext } from "./context/mainContext"
import Header from "@/entities/Header"
import Viewer from "@/entities/Viewer"
import styles from "@/pages/styles/Main.module.css"


export default function Main() {
    const [mainState, setMainState] = useState("")
    // тестируем отображение текста при помощи запроса в InfoBoard
    useEffect(() => {
        fetch("https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes", {
            headers: {
                "x-rapidapi-host": "jokes-by-api-ninjas.p.rapidapi.com",
                "x-rapidapi-key": "23876cd805msh01466ad42d73facp15f893jsn1fdfaa2a516a"
            }
        })
        .then((response) => response.json())
        .then((data) => {
            setMainState(data[0].joke)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <>
            <div className={styles.container_header}>
                <Header />
            </div>
            <div className={styles.container_viewer}>
                <mainStateContext.Provider value={mainState}>
                    <Viewer />
                </mainStateContext.Provider>
            </div>
        </>
    )
}

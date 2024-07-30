"use client"


import { useState, useId } from "react"
import { useRouter } from "next/navigation"
import Changer from "@/widgets/Changer"
import SignSider from "@/widgets/SignSider"
import LoginInput from "@/shared/LoginInput"
import SubmitButton from "@/shared/SubmitButton"
import styles from "@/entities/styles/LoginWindow.module.css"


export default function LoginWindow() {
    const [windowState, setWindowState] = useState("Создать")
    const inFormId = useId()
    const upFormId = useId()
    const router = useRouter()


    function changeWindowMode() {
        setWindowState(newWindowState)
    }


    async function signUp(formData: FormData) {
        const response = await fetch("", {
            method: "POST",
            body: formData
        })
        if (!response.ok) {
            throw new Error("Ошибка заполнения формы")
        }
    }


    async function signIn(formData: FormData) {
        const response = await fetch("", {
            method: "POST",
            body: formData
        })
        return response
    }


    async function signAccount(formData: FormData) {
        if (windowState == "Создать") {
            signUp(formData)
        } else {
            signIn(formData) 
        }
        router.push("/")
    }


    const newWindowState = (windowState == "Создать" ? "Войти" : "Создать")

    return (
        <>
            <div className={styles.window}>

                <Changer 
                windowState={windowState} 
                newWindowState={newWindowState}
                changeWindowMode={changeWindowMode}
                />

                <SignSider formId={inFormId} formAction={signAccount}>
                    <h1>Войти в аккаунт</h1>

                    <LoginInput
                    formId={inFormId} 
                    type="email"
                    placeholder="Email"
                    />

                    <LoginInput
                    formId={inFormId} 
                    type="password"
                    placeholder="Password"
                    />

                    <div className={styles.container_button}>
                        <SubmitButton
                        formId={inFormId}
                        buttonTitle={"Войти"}
                        isInHeader={false}
                        />
                    </div>
                </SignSider>

                <SignSider formId={upFormId} formAction={signAccount}>
                    <h1>Создать аккаунт</h1>

                    <LoginInput
                    formId={upFormId} 
                    type="text" 
                    placeholder="Nickname"
                    />
                    <LoginInput
                    formId={upFormId} 
                    type="password" 
                    placeholder="Password"
                    />

                    <div className={styles.container_button}>
                        <SubmitButton 
                        formId={upFormId} 
                        buttonTitle={"Создать"} 
                        isInHeader={false}
                        />
                    </div>
                </SignSider>

            </div>
        </>
    )
}
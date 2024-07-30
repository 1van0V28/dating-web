import LoginWindow from "@/entities/LoginWindow"
import styles from "@/pages/styles/Login.module.css"


export default function Login() {
    return (
        <>
            <div className={styles.space}>
                <LoginWindow />
            </div>
        </>
    )
}
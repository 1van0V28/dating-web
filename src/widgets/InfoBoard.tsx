import { useContext } from "react"
import { mainStateContext } from "@/pages/context/mainContext"
import styles from "@/widgets/styles/InfoBoard.module.css"


export default function InfoBoard() {
    const stateMainContext = useContext(mainStateContext)

    return (
        <>
            <div className={styles.container_info}>
                <textarea className={styles.text} readOnly={true} value={stateMainContext}></textarea>
            </div>
        </>
    )
}
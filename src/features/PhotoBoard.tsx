import styles from "@/features/styles/PhotoBoard.module.css"


export default function PhotoBoard() {
    return (
        <>
            <div className={styles.container_photo}>
                <div className={styles.container_main_photo}></div>
                <div className={styles.container_optional_photo}></div>
            </div>
        </>
    )
}
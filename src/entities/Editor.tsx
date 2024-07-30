import PhotoBoard from "@/features/PhotoBoard"
import MainInfoBoard from "@/features/MainInfoBoard"
import OptionalInfoBoard from "@/features/OptionalInfoBoard"
import styles from "@/entities/styles/Editor.module.css"


export default function Editor() {
    return (
        <>
            <div className={styles.container}>

                <div className={styles.container_info}>
                    <PhotoBoard />
                    <MainInfoBoard />
                </div>

                <div className={styles.container_info}>
                    <OptionalInfoBoard />
                </div>

            </div>
        </>
    )
}
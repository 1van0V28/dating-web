import { useContext } from "react"
import { profileStateContext } from "@/pages/context/profileContext"
import styles from "@/shared/styles/TextInfo.module.css"


export default function TextInfo(props: {infoBoardState: string, formId: string}) {
    const stateProfileContext = useContext(profileStateContext)

    const textStyle = (props.infoBoardState == "about me" ? styles.container_text : styles.container_text_hidden)

    return (
        <>
            <div className={textStyle}>
                <textarea className={styles.text} 
                form={props.formId} 
                placeholder="Расскажите немного о себе..." 
                defaultValue={stateProfileContext}>
                </textarea>
            </div>
        </>
    )
}
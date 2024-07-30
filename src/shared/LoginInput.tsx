import styles from "@/shared/styles/LoginInput.module.css"


export default function LoginInput(props: {formId: string, type: string, placeholder: string, }) {
    return (
        <>
            <input form={props.formId} className={styles.input} type={props.type} placeholder={props.placeholder}></input>
        </>
    )
}

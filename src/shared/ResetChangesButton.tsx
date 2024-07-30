import styles from "@/shared/styles/ResetChangesButton.module.css"


export default function ResetChangesButton(props: {formId: string, buttonTitle: string, isInHeader: boolean}) {
    const buttonStyle = (props.isInHeader ? styles.button_header : styles.button)

    return (
        <>
            <input className={buttonStyle} 
            type="reset"
            form={props.formId}  
            value={props.buttonTitle}>
            </input>
        </>
    )
}
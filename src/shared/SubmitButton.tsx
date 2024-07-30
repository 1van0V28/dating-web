import styles from "@/shared/styles/SubmitButton.module.css"


export default function SaveChangesButton(props: {formId: string, buttonTitle: string, isInHeader: boolean}) {
    const buttonStyle = (props.isInHeader ? styles.button_header : styles.button)

    return (
        <>
            <input className={buttonStyle} 
            type="submit"
            form={props.formId} 
            value={props.buttonTitle}>
            </input>
        </>
    )
}
import { useId } from "react"
import styles from "@/shared/styles/FilterCheckbox.module.css"


export default function FilterCheckbox(props: {formId: string, checkboxName: string}) {
    const id = useId()

    return (
        <>
            <label className={styles.container_checkbox} htmlFor={id}>
                <input className={styles.checkbox} 
                type="checkbox" 
                form={props.formId} 
                name={props.checkboxName} 
                id={id}>
                </input>
                {props.checkboxName}
            </label>
        </>
    )
}
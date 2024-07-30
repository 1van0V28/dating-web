import { useId } from "react"
import styles from "@/shared/styles/FilterRadio.module.css"


export default function FilterRadio(props: {formId: string, filterName: string, radioName: string}) {
    const id = useId()

    return (
        <>
            <label className={styles.container_radio} htmlFor={id}>
                <input className={styles.radio} 
                type="radio" 
                form={props.formId}
                name={props.filterName} 
                value={props.radioName}
                id={id}>
                </input>
                {props.radioName}
            </label>
        </>
    )
}
import styles from "@/shared/styles/MainInfoInput.module.css"


export default function MainInfoInput(props: {formId: string, name: string, description: string, placeholder: string}) {
    return (
        <>
            <label htmlFor={props.name}>
                <span className={styles.title}>{props.description}</span>
                <input className={styles.input} 
                type="text" 
                form={props.formId} 
                name={props.name} 
                id={props.name} 
                placeholder={props.placeholder}>  
                </input>
            </label>
        </>
    )
}

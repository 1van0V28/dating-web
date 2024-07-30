import { useId } from "react"
import { mainInputs } from "@/app/mainInputsData"
import MainInfoInput from "@/shared/MainInfoInput"
import SubmitButton from "@/shared/SubmitButton"
import ResetChangesButton from "@/shared/ResetChangesButton"
import styles from "@/features/styles/MainInfoBoard.module.css"


export default function MainInfoBoard() {
    const formId = useId()

    //дописать функцию отправки данных на сервер
    function saveChangesClick(formData: FormData) {
        const nameValue = formData.get("city")
        console.log(nameValue)
    }


    const inputList = mainInputs.map((input, index) => {
        return (
            <MainInfoInput 
            key={index} 
            formId={formId}
            name={input.name} 
            description={input.description} 
            placeholder={input.placeholder} />)
    })

    return (
        <>
            <div className={styles.container}>
                <form className={styles.container_form} action={saveChangesClick} id={formId}>
                    {inputList}
                </form>
                <span className={styles.container_button}>

                    <div className={styles.button_box}>
                        <ResetChangesButton 
                        formId={formId} 
                        buttonTitle="Очистить"
                        isInHeader={false} />
                    </div>
                    <div className={styles.button_box}>
                        <SubmitButton 
                        formId={formId} 
                        buttonTitle="Сохранить"
                        isInHeader={false}/>
                    </div>
                </span>
            </div>
        </>
    )
}
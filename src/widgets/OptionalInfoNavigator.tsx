import NavigatorButton from "@/shared/NavigatorButton"
import ResetChangesButton from "@/shared/ResetChangesButton"
import SubmitButton from "@/shared/SubmitButton"
import styles from "@/widgets/styles/OptionalInfoNavigator.module.css"


export default function OptionalnfoNavigator(props: {boardState: string, setBoardState: (name: string) => void, formId: string}) {
    return (
        <>
            <span className={styles.container_button_left}>
                <NavigatorButton 
                name="about me" 
                boardState={props.boardState} 
                setBoardState={props.setBoardState}
                />
                <NavigatorButton 
                name="filters"
                boardState={props.boardState}
                setBoardState={props.setBoardState}
                />
            </span>
            <span className={styles.container_button_right}>
                <ResetChangesButton formId={props.formId} buttonTitle="Сбросить" isInHeader={true}/>
                <SubmitButton formId={props.formId} buttonTitle="Применить" isInHeader={true}/>
            </span>
        </>
    )
}
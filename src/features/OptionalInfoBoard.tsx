import { useState, useId } from "react"
import { formIdContext } from "@/features/context/optionalInfoBoardContext"
import OptionalInfoNavigator from "@/widgets/OptionalInfoNavigator"
import TextInfo from "@/shared/TextInfo"
import FilterInfoboard from "@/widgets/FilterInfoboard"
import styles from "@/features/styles/OptionalInfoBoard.module.css"

//написать функцию отправки данных формы
export default function OptionalInfoBoard() {
    const [infoBoardState, setInfoBoardState] = useState("filters")
    const formId = useId()


    function navigatorClick(newInfoBoardState: string) {
        setInfoBoardState(newInfoBoardState)
    }

    
    return (
        <>
            <div className={styles.info_container}>
                <span className={styles.container_navigator}>
                    <OptionalInfoNavigator boardState={infoBoardState} setBoardState={navigatorClick} formId={formId}/>
                </span>
                <hr className={styles.separator}></hr>
            
                <form className={styles.container_info} id={formId}>

                    <formIdContext.Provider value={formId}>
                        <FilterInfoboard infoBoardState={infoBoardState}/>
                    </formIdContext.Provider>

                    <TextInfo infoBoardState={infoBoardState} formId={formId}/>

                </form>
            </div>
        </>
    )
}
import { useState } from "react"
import { users } from "@/app/usersTestData"
import Slider from "@/widgets/Slider"
import InfoBoard from "@/widgets/InfoBoard"
import ControlPanel from "@/widgets/ControlPanel"
import styles from "@/features/styles/SliderPanel.module.css"


export default function SliderPanel() {
    const [sliderState, getSliderState] = useState(0)


    function prevClick() {
        const newSliderState = (sliderState != 0 ? sliderState - 1 : sliderState)
        getSliderState(newSliderState)
    }
    
    
    function nextClick() {
        const newSliderState = (sliderState != users.length - 1 ? sliderState + 1 : sliderState)
        getSliderState(newSliderState)
    }
    
    
    return (
        <>
            <div className={styles.container}>
                <Slider sliderState={sliderState}/>
            </div>
            <div className={styles.container}>
                <InfoBoard />
                <ControlPanel 
                prevClick={prevClick}
                nextClick={nextClick} />
            </div>
        </>
    )
}
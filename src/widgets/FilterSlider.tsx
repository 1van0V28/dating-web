import { useState } from "react"
import FilterHeader from "@/shared/FilterHeader"
import FilterCheckbox from "@/shared/FilterCheckbox"
import styles from "@/widgets/styles/FilterSlider.module.css"


export default function FilterSlider(props: {filterName: string, formId: string, subfilters: string[]}) {
    const [sliderState, setSliderState] = useState("hidden")

    
    function filterClick() {
        const newSliderState = (sliderState == "hidden" ? "opened" : "hidden")
        setSliderState(newSliderState)
    }

    const subfilterStyle = (sliderState == "hidden" ? styles.container_subfilter : styles.container_subfilter_opened)
    const subfilterList = props.subfilters.map((subfilter, index) => {
        return (
            <FilterCheckbox key={index} formId={props.formId} checkboxName={subfilter}/>
        )
    })

    return (
        <>
            <div className={styles.container_filter}>

                <FilterHeader name={props.filterName} sliderType={sliderState} subfiltersLength={[].length} setSliderState={filterClick}></FilterHeader>

                <div className={subfilterStyle}>
                    {subfilterList}
                </div>

            </div>
        </>
    )
}
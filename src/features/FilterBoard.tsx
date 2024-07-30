"use client"


import { useId } from "react"
import { filters } from "@/app/filtersTestData"
import FilterSlider from "@/widgets/FilterSlider"
import SubmitButton from "@/shared/SubmitButton"
import ResetChangesButton from "@/shared/ResetChangesButton"
import styles from "@/features/styles/FilterBoard.module.css"


export default function FilterBoard() {
    const formId = useId()

    const filterSliderList = filters.map((filter, index) => {
        return (
            <FilterSlider 
            key={index} 
            filterName={filter.name} 
            formId={formId} 
            subfilters={filter.data} />
        )
    })

    return (
        <>
            <div className={styles.container_filter}>

                <form className={styles.container_form} id={formId}>
                    {filterSliderList}
                </form>

                <div className={styles.container_button}>
                    <SubmitButton 
                    formId={formId} 
                    buttonTitle="Применить" 
                    isInHeader={false} />
                    <ResetChangesButton 
                    formId={formId} 
                    buttonTitle="Сбросить" 
                    isInHeader={false} />
                </div>

            </div>
        </>
    )
}
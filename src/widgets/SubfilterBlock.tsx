import { useContext } from "react"
import { formIdContext } from "@/features/context/optionalInfoBoardContext"
import FilterRadio from "@/shared/FilterRadio"
import FilterCheckbox from "@/shared/FilterCheckbox"
import styles from "@/widgets/styles/SubfilterBlock.module.css"


export default function SubfilterBlock(props: {boardState: string, filterName: string, filterType:string, subfilterList: string[]}) {
    const contextFormId = useContext(formIdContext)

    const subfilters = props.subfilterList.map((subfilter, index) => {
        const component = props.filterType == "radio"
        ?
        <FilterRadio 
        key={index} 
        formId={contextFormId} 
        filterName={props.filterName} 
        radioName={subfilter} />
        :
        <FilterCheckbox 
        key={index} 
        formId={contextFormId} 
        checkboxName={subfilter}/>
         
        return component
    })

    const blockStyle = (props.boardState == props.filterName ? styles.container_subfilters : styles.container_subfilters_hidden)

    return (
        <>
            <div className={blockStyle}>
                {subfilters}
            </div>
        </>
    )
}
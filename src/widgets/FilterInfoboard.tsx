import { useState } from "react"
import FilterSider from "@/widgets/FilterSider"
import SubfilterSider from "@/widgets/SubfilterSider"
import styles from "@/widgets/styles/FilterInfoboard.module.css"


export default function FilterInfoboard(props: {infoBoardState: string}) {
    const [boardState, setBoardState] = useState("city")


    function filterClick(filterName: string) {
        setBoardState(filterName)
    }


    const infoBoardStyle = (props.infoBoardState == "filters" ? styles.container_infoboard : styles.container_infoboard_hidden)

    return (
        <>
            <span className={infoBoardStyle}>
                <FilterSider boardState={boardState} filterClick={filterClick}/>
                <SubfilterSider boardState={boardState}/>
            </span>
        </>
    )
}
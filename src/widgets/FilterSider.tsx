import { filters } from "@/app/filtersTestData"
import FilterInfoHeader from "@/shared/FilterInfoHeader"
import styles from "@/widgets/styles/FilterSider.module.css"


export default function FilterSider(props: {boardState: string, filterClick: (filterName: string) => void}) {
    const filterHeaderList = filters.map((filter, index) => {
        return (
            <FilterInfoHeader 
            key={index} 
            name={filter.name} 
            boardState={props.boardState} 
            setSliderState={() => {props.filterClick(filter.name)}} />
        )
    })

    return (
        <>
            <div className={styles.container_sider}>
                {filterHeaderList}
            </div>
        </>
    )
}
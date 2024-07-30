import { filters } from "@/app/filtersTestData"
import SubfilterBlock from "@/widgets/SubfilterBlock"
import styles from "@/widgets/styles/SubfilterSider.module.css"


export default function SubfilterSider(props: {boardState: string}) {
    const subfilters = filters.map((filter, index) => {
        return (
            <SubfilterBlock 
            key={index} 
            boardState={props.boardState} 
            filterName={filter.name} 
            filterType={filter.type} 
            subfilterList={filter.data}/>
        )
    })

    return (
        <>
            <div className={styles.container_sider}>
                {subfilters}
            </div>
        </>
    )
}
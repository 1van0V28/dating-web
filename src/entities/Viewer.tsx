import FilterBoard from "@/features/FilterBoard"
import SliderPanel from "@/features/SliderPanel"
import styles from "@/entities/styles/Viewer.module.css"


export default function Viewer() {
    return (
        <>
            <div className={styles.container_filter_board}>
                <FilterBoard />
            </div>
            <div className={styles.container_slider_panel}>
                <SliderPanel />
            </div>
        </>
    )
}
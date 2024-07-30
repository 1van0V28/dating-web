import { BsArrowDownShort } from "react-icons/bs"
import styles from "@/shared/styles/FilterHeader.module.css"


export default function FilterHeader(props :{name: string, sliderType: string, subfiltersLength: number, setSliderState: () => void}) {
    const iconTransformDeg = (props.sliderType == "hidden" ? "(0deg)" : "(180deg)")
    const headerStyle = (props.subfiltersLength == 0 ? styles.header : styles.header_chosen)
    
    return (
        <>
            <div className={styles.header_container} onClick={props.setSliderState}>
                <BsArrowDownShort style={{
                    margin: "0 0 0 1vw",
                    width: "2vh",
                    height: "2vh",
                    transform: "rotateZ" + iconTransformDeg,
                    transition: "transform 0.5s"
                }}/>
                <header className={headerStyle}>{props.name}</header>
            </div>
        </>
    )
}
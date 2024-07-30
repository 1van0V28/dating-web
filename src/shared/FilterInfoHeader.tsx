import { BsArrowLeftShort } from "react-icons/bs"
import styles from "@/shared/styles/FilterInfoHeader.module.css"


export default function FilterInfoHeader(props: {name: string, boardState: string, setSliderState: () => void}) {
    const iconTransformDeg = (props.name != props.boardState ? "(0deg)" : "(-180deg)")
    const headerStyle = (props.name == props.boardState ? styles.header_chosen : styles.header)
    
    return (
        <>
            <div className={styles.container_header} onClick={props.setSliderState}>
                <BsArrowLeftShort style={{
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
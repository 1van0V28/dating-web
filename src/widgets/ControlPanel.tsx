import { BsCaretUp } from "react-icons/bs"
import { BsCaretDown } from "react-icons/bs"
import { BsEyeSlash } from "react-icons/bs"
import { BsHeart } from "react-icons/bs"
import ControlButton from "@/shared/ControlButton"
import styles from "@/widgets/styles/ControlPanel.module.css"


const BASE_ICON_STYLE = {
    width: "40%",
    height: "40%",
}


export default function ControlPanel(props: {prevClick: () => void, nextClick: () => void}) {
    const prevIcon = <BsCaretUp style={BASE_ICON_STYLE}/>
    const nextIcon = <BsCaretDown style={BASE_ICON_STYLE}/>
    const likeIcon = <BsHeart style={BASE_ICON_STYLE}/>
    const dislikeIcon = <BsEyeSlash style={BASE_ICON_STYLE}/>

    return (
        <>
            <div className={styles.container_control}>
                <span className={styles.container_button_block}>
                    <ControlButton icon={prevIcon} action={props.prevClick} />
                    <ControlButton icon={dislikeIcon} />
                </span>
                <span className={styles.container_button_block}>
                    <ControlButton icon={nextIcon} action={props.nextClick} />
                    <ControlButton icon={likeIcon} />
                </span>
            </div>
        </>
    )
}
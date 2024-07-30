import styles from "@/shared/styles/ControlButton.module.css"


interface modalRendererProps {
    icon: React.ReactElement
    action?: () => void,
}


export default function ControlButton(props: modalRendererProps) {
    return (
        <>
            <button className={styles.button} onClick={props.action}>{props.icon}</button>
        </>
    )
}
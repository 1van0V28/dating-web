import styles from "@/shared/styles/HeaderButton.module.css"


export default function HeaderButton(props: {action?: () => void, icon: React.ReactElement}) {
    return (
        <>
            <button className={styles.button} onClick={props.action}>{props.icon}</button>
        </>
    )
}
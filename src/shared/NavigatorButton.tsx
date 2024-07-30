import styles from "@/shared/styles/NavigatorButton.module.css"


export default function NavigatorButton(props: {name: string, boardState: string, setBoardState: (name: string) => void}) {
    const name = (props.name == "filters" ? "Фильтры" : "О себе")
    const buttonStyle = (props.name == props.boardState ? styles.button_chosen : styles.button)

    return (
        <>
            <button className={buttonStyle} onClick={() => props.setBoardState(props.name)}>{name}</button>
        </>
    )
}
import styles from "@/widgets/styles/Changer.module.css"
 

export default function Changer(props: {windowState: string, newWindowState: string, changeWindowMode: () => void}) {
    const changerStyle = (props.windowState == "Войти") 
    ?
    ({
        changerStyle: styles.changer_right,
        textStyle: styles.text_left
    })
    :
    ({
        changerStyle: styles.changer_left,
        textStyle: styles.text_right
    })

    return (
        <>
            <div className={changerStyle.changerStyle}>
                <div className={styles.content}>

                    <span className={changerStyle.textStyle}>
                        <h1 className={styles.slide_left}>С возвращением!</h1>
                        <h1 className={styles.slide_right}>Привет, Друг!</h1>
                    </span>

                    <span className={changerStyle.textStyle}>
                        <p className={styles.text}>Войди в собственный аккаунт, чтобы продолжить</p>
                        <p className={styles.text}>Создай персональный аккаунт, чтобы продолжить</p>
                    </span>

                    <button className={styles.button} onClick={props.changeWindowMode}>{props.newWindowState}</button>

                </div>
            </div>
        </>
    )
}

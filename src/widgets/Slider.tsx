import { users } from "@/app/usersTestData"
import styles from "@/widgets/styles/Slider.module.css"


export default function Slider(props: {sliderState: number}) {
    const user = users[props.sliderState]
    
    return (
        <>
            <div className={styles.window}>
                <div className={styles.user}>
                    <h1>{user.name}</h1>
                    <h2>{user.city}</h2>
                    <h2>{user.school}</h2>
                </div>
            </div>
        </>
    )
}
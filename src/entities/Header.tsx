"use client"


import { useRouter } from "next/navigation"
import { BsBellFill } from "react-icons/bs"
import HeaderButton from "@/shared/HeaderButton"
import AccountBlock from "@/widgets/AccountBlock"
import styles from "@/entities/styles/Header.module.css"


export default function Header() {
    const router = useRouter()
    

    function headerClick() {
        router.push("/")
    }


    const icon = <BsBellFill style={{
        width: "40%",
        height: "40%",
        color: "#6930c3",
    }}/>

    return (
        <>
            <div className={styles.container_hat}>

                <div className={styles.container_tools}>
                    <input className={styles.searcher}
                    type="search"
                    placeholder="#введите тег">
                    </input>
                </div>

                <h1 onClick={headerClick}>Dating</h1>

                <div className={styles.container_common}>
                    <AccountBlock />
                    <HeaderButton icon={icon} />
                </div> 

            </div>
        </>
    )
}
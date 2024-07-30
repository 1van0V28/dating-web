import { useState } from "react"
import { useRouter } from "next/navigation"
import { BsPersonFill } from "react-icons/bs"
import RoutingButton from "@/shared/RoutingButton"
import HeaderButton from "@/shared/HeaderButton"
import styles from "@/widgets/styles/AccountBlock.module.css"


export default function AccountBlock() {
    const [blockState, setBlockState] = useState("hidden")
    const router = useRouter()


    function routerClick(routerDirection: string) {
        router.push(routerDirection)
    } 

    
    function handleClick() {
        const newBlockState = (blockState == "hidden" ? "active" : "hidden")
        setBlockState(newBlockState)
    }


    const containerStyle = (blockState == "hidden" ? styles.container_block_hidden : styles.container_block)
    const icon = <BsPersonFill style={{
        width: "50%",
        height: "50%",
        color: "#6930c3"
    }}/>

    return (
        <>
            <div className={containerStyle}>
                <RoutingButton
                name={"Авторизация"}
                routerDirection={"/login"} 
                routerClick={routerClick} />
                <RoutingButton 
                name={"Просмотр анкет"}
                routerDirection={"/"}
                routerClick={routerClick} />
                <RoutingButton 
                name={"Профиль"} 
                routerDirection={"/profile"}
                routerClick={routerClick}/>
            </div>
            <HeaderButton action={handleClick} icon={icon} />
        </>
    )
}
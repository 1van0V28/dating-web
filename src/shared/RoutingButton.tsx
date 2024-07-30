import styles from "@/shared/styles/RoutingButton.module.css"


export default function RoutingButton(props: {name: string, routerDirection: string, routerClick: (routerDirection: string) => void}) {
    
    
    function handleClick() {
        props.routerClick(props.routerDirection)
    }

    
    return (
        <>
            <button className={styles.button} onClick={handleClick}>{props.name}</button>
        </>
    )
}
import { ReactNode } from "react"
import styles from "@/widgets/styles/SignSider.module.css"


export default function SignSider({children, formId, formAction} : {children: ReactNode | ReactNode[], formId: string, formAction: (formData: FormData) => Promise<void>}) {
    return (
        <>
            <div className={styles.signer}>
                <form className={styles.content}  action={formAction} id={formId}>
                    {children}
                </form>
            </div>
        </>
    )
}
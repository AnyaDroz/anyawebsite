import styles from "./Template.module.css"
import {PropsWithChildren} from "react";

export default function Template({children}: PropsWithChildren) {
    return (
        <div className={styles.pageLayout}>{children}</div>
    )
}

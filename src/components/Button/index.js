import Link from 'next/link'
import styles from './Button.module.css'

export default function Button({children, path, pd, buttonClicked, link}) {
    if (link) {
        return (
            <a className={ `${pd && styles.pd} ${styles.btn}` } href="#preco">{children}</a>
        )
    }
    return (
        <a className={ `${pd && styles.pd} ${styles.btn}` } onClick={buttonClicked}>{children}</a>
    )
}
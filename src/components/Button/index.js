import Link from 'next/link'
import styles from './Button.module.css'

export default function Button({children, path, pd}) {
    return (
        <Link href={path} className={ `${pd && styles.pd} ${styles.btn}` }>{children}</Link>
    )
}
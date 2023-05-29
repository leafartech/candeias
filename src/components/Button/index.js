import Link from 'next/link'
import styles from './Button.module.css'

export default function Button({children, path}) {
    return (
        <Link href={path} className={ styles.btn }>{children}</Link>
    )
}
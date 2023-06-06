import styles from './Text.module.css'

export default function Text({main, children, start, bg, secondary}) {
    return (
        <div className={ `${secondary ? styles.secondary : ''} ${bg ? styles.bg : ''} ${start ? styles.start : ''} ${styles.text}` }>
            <h1>{main}</h1>
            {children}
        </div>
    )  
}
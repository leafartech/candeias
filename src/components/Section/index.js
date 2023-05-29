import styles from './Section.module.css'

export default function Section({children, bg, top, pd}) {
    return (
        <section className={ `${pd ? styles.pd : ''} ${top ? styles.top : ''} ${styles.section} ${bg ? styles.bg : ''}`}>
            <div className={ styles.content }>
                {children}
            </div>
        </section>
    )
}
import styles from './CardNormal.module.css'

export default function CardNormal({text, children, type}) {
    if (type) {
        return (
            <div className={ styles.aq}>
                <div className={ styles.header }>
                    {children}
                </div>
                <div className={ styles['card-normal-2'] }>
                    <div className={ styles.text }>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className={ styles['card-normal'] }>
            <div className={ styles.header }>
                {children}
            </div>
            <div className={ styles.text }>
                <p>{text}</p>
            </div>
        </div>
    )
}
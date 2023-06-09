import Button from '../Button'
import styles from './comparison.module.css'

export default function Comparison({children, text, ok, buttonClicked}) {
    return (
        <div className={ `${ok ? styles.ok : ''} ${styles.comparison}` }>
            {children}
            {ok ?
            <div className={ styles.comparisonIcon}>
                <img src="./images/vs.png" alt="em comparação a" />
            </div>
            :''}
            <div className={ styles.body }>
                {text.map((item, index) => (
                    <div className={ styles.text } key={index}>
                        <h5>{index + 1})</h5>
                        <p>{item}</p>
                    </div>
                ))}
                {ok ?
                <Button link={true}>Quero participar do Clube Candeias</Button>
                : ''}
            </div>
        </div>
    )
}
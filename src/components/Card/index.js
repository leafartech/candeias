import styles from './Card.module.css'

export default function Card({city, path, children}) {
    return (
        <div className={ styles.card }>
            <h3>{city}</h3>
            <img src={`./images/city/${path}.png`} alt={city} />
            <div>
                <p>{children}</p>
            </div>
        </div>
    )
}
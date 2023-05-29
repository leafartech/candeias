import Text from '../Text'
import styles from './Check.module.css'

export default function Check() {
    return (
        <div className={ styles.check }>
            <img src="./images/logo2.png" alt="Logo Clube Candeias" />
            <div>
                <h2>Entrando hoje para o Clube Candeias você acesso tem imediato:</h2>
                <ul>
                    <li>
                        <img src="./images/check.png" alt="check icon" />
                        <span>A reservas de hotel (pelo aplicativo, site, pelo 0800 ou presencialmente) em até 12x sem juros</span>
                    </li>
                    <li>
                        <img src="./images/check.png" alt="check icon" />
                        <span>Clube de hospedagem de hotel</span>
                    </li>
                    <li>
                        <img src="./images/check.png" alt="check icon" />
                        <span>Não tem diferença nenhuma em redes de hotéis</span>
                    </li>
                </ul>
            </div>
            <div className={ styles.border }></div>
            <div>
                <h2>Qual o valor para se tornar associado?</h2>
                <ul>
                    <li>
                        <img src="./images/money.png" alt="check icon" />
                        <span>Cartão de crédito: 12x R$ 400,00 sem juros (R$ 4.800,00)</span>
                    </li>
                    <li>
                        <img src="./images/money.png" alt="check icon" />
                        <span>Débito em conta ou cartão recorrente: Parcelado em até 36x de R$ 198,00</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
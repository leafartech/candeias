import styles from './Check.module.css'

export default function Check() {
    return (
        <div className={ styles.check }>
            <img src="./images/logo2.png" alt="Logo Clube Candeias" />
            <div>
                <h2>Entrando hoje para o Clube Candeias você acesso tem imediato:</h2>
                <ul style={{ marginTop: '24px'}}>
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
                <div className={ styles.aq }>
                    <div>
                        <div>
                            <h3>R$</h3>
                            <span>12x de</span>
                        </div>
                        <h3>Cartão de crédito</h3>
                        <h4>400,00</h4>
                        <span>(R$ 4.800,00)</span>
                    </div>
                </div>
                <div className={ styles.last }>
                    <p>Com opção de parcelamento em débito em conta ou cartão recorrente</p>
                </div>
            </div>
        </div>
    )
}
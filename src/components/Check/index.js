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
                        <span>As reservas são liberadas imediatamente. Você pode fazer pelo aplicativo, site, 0800 ou presencialmente)</span>
                    </li>
                    <li>
                        <img src="./images/check.png" alt="check icon" />
                        <span>Você tem acesso a todas as redes de hotéis e as unidades próprias</span>
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
                    <p>Com oções de parcelamento em até 36x em débito em conta ou cartão recorrente.</p>
                </div>
            </div>
        </div>
    )
}
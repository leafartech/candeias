import styles from './Check.module.css'

export default function Check({ second }) {
    if (second) {
        return (
            <div className={ `${ second && styles.second } ${styles.check}`}>
                {/* <img src="./images/logo2.png" alt="Logo Clube Candeias" /> */}
                <div>
                    <h2>Veja bem:</h2>
                    <ul style={{ marginTop: '24px'}}>
                        <li>
                            <img src="./images/check.png" alt="check icon" />
                            <span>Você viajando em família, irá gastar em média de R$ 600/dia de hospedagem. Caso fique hospedado 7 dias. O Valor gasto será de <strong style={{ color: 'rgb(255, 0, 0)'}}>R$ 4200,00</strong></span>
                        </li>
                        <li>
                            <img src="./images/check.png" alt="check icon" />
                            <span> Pelo candeias, você investirá em média R$ 300 de hospedagem. Caso fique hospedado 7 dias. O Valor investido será de <strong style={{ color: 'rgb(0, 196, 1)'}}>R$ 2100</strong></span>
                        </li>
                    </ul>
                </div>
                <div className={ styles.border }></div>
                <div>
                    <h2>Viajando 2 vezes no ano, o título já se pagou!</h2>
                    <p>Além dos pontos que você irá acumular e poder trocar por hospedagens grátis!</p>
                </div>
            </div>
        )
    }
    return (
        <div className={ styles.check }>
            <img src="./images/logo2.png" alt="Logo Clube Candeias" />
            <div>
                <h2>Entrando hoje para o Clube Candeias você irá ganhar:</h2>
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
                        <h3>Pagamento uma "única vez na vida"</h3>
                        <h4>393,25</h4>
                    </div>
                </div>
                <div className={ styles.last }>
                    <p>Sem nenhum custo adicional, taxas de manutenção ou anuidade.</p>
                    <p>Com oções de parcelamento em até 36x em débito em conta ou cartão recorrente.</p>
                </div>
            </div>
        </div>
    )
}
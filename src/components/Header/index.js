import HeroFlex from '../HeroFlex'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={ styles.header }>
            <HeroFlex img={ true } main="Viaje para os principais destinos do Brasil com até 40% de desconto" subtitle="Balneário Camboriú, Gramado, Rio de Janeiro, Florianópolis e até mesmo nos Estados Unidos, desfrutando dos melhores hotéis com descontos de até 40% nas hospedagens">
                <div className={ styles['div-img']}>
                    <img src="./images/mainImg.png" alt="Imagem principal" />
                </div>
            </HeroFlex>
        </header>
    )
}
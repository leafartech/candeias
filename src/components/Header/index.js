import HeroFlex from '../HeroFlex'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={ styles.header }>
            <HeroFlex head={true} img={ true } main="Viaje para os principais destinos do Brasil com até 40% de desconto" subtitle="Balneário Camboriú, Gramado, Rio de Janeiro, Florianópolis e até mesmo nos Estados Unidos, desfrutando dos melhores hotéis com descontos de até 40% nas hospedagens">
                <div className={ styles['div-img']}>
                    {/* <img src="./images/mainImg.png" alt="Imagem principal" /> */}
                    <iframe width="360px" src="https://www.youtube.com/embed/gKQ58H5Llw4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </HeroFlex>
        </header>
    )
}
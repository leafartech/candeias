import HeroFlex from '../HeroFlex'
import styles from './Header.module.css'

export default function Header({buttonClicked}) {
    return (
        <header className={ styles.header }>
            <nav className={ styles['nav-top']}>
                <img src="./images/logo5.png" alt="" />
            </nav>
            <HeroFlex link={true} head={true} img={ true } main="Viaje para os principais destinos do Brasil com até 40% de desconto" subtitle="Balneário Camboriú, Gramado, Rio de Janeiro, Florianópolis e até mesmo nos Estados Unidos, desfrutando dos melhores hotéis com descontos de até 40% nas hospedagens">
                <div className={ styles['div-img']}>
                    {/* <img src="./images/mainImg.png" alt="Imagem principal" /> */}
                    <iframe width="360px" src="https://www.youtube.com/embed/gKQ58H5Llw4?rel=0&modestbranding=1&showinfo=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </HeroFlex>
        </header>
    )
}
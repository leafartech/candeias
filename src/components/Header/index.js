import HeroFlex from '../HeroFlex'
import styles from './Header.module.css'

export default function Header({buttonClicked}) {
    return (
        <header className={ styles.header }>
            <nav className={ styles['nav-top']}>
                <img src="./images/logo5.png" alt="" />
            </nav>
            <HeroFlex link={true} head={true} img={ true } main="Viaje para os principais destinos do Brasil com até 60% de economia" subtitle="Balneário Camboriú, Gramado, Foz do Iguaçú, Florianópolis, Bombinhas, Guarjujá, Bonito, Natal e até mesmo Orlando, Nova York, Londres ou Paris desfrutando dos melhores hotéis com ECONOMIA de até 60% nas hospedagens.">
                <div className={ styles['div-img']}>
                    {/* <img src="./images/mainImg.png" alt="Imagem principal" /> */}
                    <iframe width="360px" src="https://www.youtube.com/embed/gKQ58H5Llw4?rel=0&modestbranding=1&showinfo=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </HeroFlex>
        </header>
    )
}
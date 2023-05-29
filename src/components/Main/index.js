import Card from '../Card'
import Check from '../Check'
import HeroFlex from '../HeroFlex'
import Section from '../Section'
import Text from '../Text'
import Comparison from '../comparison'
import styles from './Main.module.css'

export default function Main() {
    return (
        <main className={ styles.main }>
            <Section bg={true} top={true}>
                <Text secondary={ true } start={false} bg={true} main="Hotéis de altíssimo nível nos melhores pontos turísticos com descontos EXCLUSIVOS! "><p>Alguns dos hotéis que você terá acesso fazendo parte do Candeias</p></Text>
                <div className={ styles['card-group']}>
                    <Card city="Balneário Camboriú" path="1">Diárias a partir de R $35,00 por pessoa a 2 quadras da praia!</Card>
                    <Card city="Complexo Turístico em Balneário Camboriú/SC" path="2">Um condomínio fechado na areia da praia. Com piscina olímpica e espelho d'água de 5 cm para bebês, com diárias a partir de R $35,00 por pessoa.</Card>
                    <Card city="Hotel de Guaratuba" path="3">Com piscina adulto e infantil, toboágua, sala de jogos, quadra de vôlei e de futebol de areia – a partir de R $55,00 por pessoa com café da manhã.</Card>
                    <Card city="Village do Sol em Natal/RN" path="4">Um hotel 5 estrelas. Fica em um bosque de coqueiros. A unidade possui quartos de hotel e também 27 chalés. Com diárias a partir de R$ 49,00!</Card>
                    <Card city="Hotel Guarany em Bonito/MS" path="5">(Pontos turísticos: AQUÁRIO NATURAL NADA COM OS PEIXES, BURACO DAS ARARAS, GRUTA DA LAGOA AZUL). Hotel recém inaugurado com piscina!</Card>
                </div>
            </Section>
            <Section pd={true}>
                <HeroFlex arr={true} main="Como funciona o Clube Candeiras?" subtitle={['O Candeias é uma Rede de Hospedagem, você se associa uma única vez e se torna sócio para SEMPRE.', 'Nossos hotéis são exclusivos para os Associados, nos melhores pontos turísticos do Brasil e do mundo.', 'Você viaja quantas vezes quiser durante o ano todo e ainda pode levar seus convidados sem taxas extras.']}>
                <div className={ styles['div-img']}>
                    <img src="./images/work.png" alt="Como funciona o Clube Candeias?" className={ styles.img } />
                    <img src="./images/abs.png" alt="Como funciona o Clube Candeias?" className={ styles.abs }/>
                </div>
                </HeroFlex>
            </Section>
            <Section>
                <div className={ styles.flex}>
                    <Comparison text={['Preços superfaturados', 'Pessoas reclamando de hospedagens canceladas em cima da hora!', 'Quartos com câmeras escondidas que filmam os hóspedes!']}>
                        <img src="./images/comparison.png" alt="outras empresas" />
                    </Comparison>
                    <Comparison ok={true} text={['Economia', 'Você não irá se frustrar com cancelamentos', 'Segurança das unidades próprias e certificadas pelo candeias', 'Título remido: você poderá viajar com familiares e amigos sem taxas extras tendo os mesmos descontos que você!']}>
                        <img src="./images/logo.png" alt="outras empresas" />
                    </Comparison>
                </div>
            </Section>
            <Section bg={true}>
                <Check />
            </Section>
            <Section>
                <img src="./images/logo4.png" alt="Logo Clube Candeiras" className={ styles.logoBg } />
                <HeroFlex  main="Quem nós somos" arr={true} subtitle={['O Clube Candeias começou em 1968, quando inauguramos nossa primeira unidade em Santa Catarina, na cidade de Piçarras. No verão daquele mesmo ano, inúmeras famílias se associaram e se hospedaram nesta primeira unidade, marcando o início do sucesso e aceitação da nossa proposta.', 'Hoje, o Clube Candeias conta com dezenas de unidades próprias, oferecendo os preços mais competitivos do mercado, concretizando viagens e férias maravilhosas para centenas de milhares de famílias associadas!', 'O Clube Candeias busca inovar sempre, rompendo as barreiras do Brasil e alcançando o mundo inteiro! O portal do associado oferece uma rede com mais de 500 mil opções de hospedagens distribuídas pelos cinco continentes. Além disso, nossos associados contam também com um aplicativo exclusivo que permite realizar reservas e acessar os serviços do clube pelo celular.']}>
                <div className={ styles['div-img']}>
                    <img src="./images/logo3.png" alt="Como funciona o Clube Candeias?" />
                </div>
                </HeroFlex>
            </Section>
        </main>
    )
}
import Button from '../Button'
import Card from '../Card'
import CardNormal from '../CardNormal'
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
            <Section bottom={true}>
                <div className={ styles.flex}>
                    <Comparison text={['Preços superfaturados', 'Pessoas reclamando de hospedagens canceladas em cima da hora!', 'Quartos com câmeras escondidas que filmam os hóspedes!']}>
                        <img src="./images/comparison.png" alt="outras empresas" />
                    </Comparison>
                    <Comparison ok={true} text={['Economia', 'Você não irá se frustrar com cancelamentos', 'Segurança das unidades próprias e certificadas pelo candeias', 'Título remido: você poderá viajar com familiares e amigos sem taxas extras tendo os mesmos descontos que você!']}>
                        <img src="./images/logo.png" alt="outras empresas" />
                    </Comparison>
                </div>
                <div className={ `${styles.center} ${styles.top}` }>
                    <Text main="Principais benefícios de ser um associado Candeias"></Text>
                    <div className={ styles.text }>
                        <Text start={true}>
                            <p style={{ marginBottom: '12px'}}>✨ Casa ou apartamento em cada ponto turístico do Brasil, sem custos extras.</p>
                            <p style={{ marginBottom: '12px'}}>🌟 Escolha entre 500.000 hotéis no mundo todo, com conforto, segurança e economia.</p>
                            <p style={{ marginBottom: '12px'}}>🏨 Comodidade: desfrute do maior Clube de férias do mundo, sem preocupações.</p>
                            <p style={{ marginBottom: '12px'}}>🏆 55 anos de tradição, garantindo hospedagens confiáveis e de qualidade.</p>
                            <p style={{ marginBottom: '12px'}}>💲 Preços imbatíveis, abaixo dos particulares, com parcelamento em até 12x sem juros.</p>
                            <p style={{ marginBottom: '12px'}}>🌟 Excelência em hospedagem, com unidades de alta qualidade e diversas opções de lazer.</p>
                            <p style={{ marginBottom: '12px'}}>💼 Título remido para férias vitalícias e hereditárias, sem mensalidades ou taxas de manutenção.</p>
                            <p style={{ marginBottom: '12px'}}>🔒 Segurança: evite problemas com câmeras escondidas e desfrute de privacidade.</p>
                            <p style={{ marginBottom: '12px'}}>📲 Plataforma online, APP, 0800 e lojas de atendimento para reservas e suporte VIP.</p>
                            <p style={{ marginBottom: '12px'}}>👫 Leve seus convidados sem taxas extras e compartilhe momentos especiais.</p>
                            <p style={{ marginBottom: '12px'}}>🏢 Acomodações espaçosas para até 10 pessoas, ideal para amigos e familiares.</p>
                            <p style={{ marginBottom: '12px'}}>⌛️ Sem carência: aproveite os benefícios imediatamente após a associação.</p>
                            <p style={{ marginBottom: '12px'}}>🎁 Programa de recompensas: acumule pontos para pagar diárias nas unidades próprias.</p>
                            <p style={{ marginBottom: '12px'}}>🎡 Parcerias de lazer: descontos em atrações turísticas, parques, museus e eventos.</p>
                        </Text>
                    </div>
                    <Button pd={ true } path="/">Quero participar do Clube Candeias</Button>
                </div>
            </Section>
            <Section bg={true} pd={true}>
                <Text bg={ true } main="Quem é associado Candeias já aprovou!"></Text>
                <div className={ styles.flex }>
                    <img className={ styles.wpp } src="./images/testmonials/1.png" alt="Avaliação/Feedback de cliente" />
                    <img className={ styles.wpp } src="./images/testmonials/2.png" alt="Avaliação/Feedback de cliente" />
                    <img className={ styles.wpp } src="./images/testmonials/3.png" alt="Avaliação/Feedback de cliente" />
                </div>
                <Check />
            </Section>
            <Section bottom={true} pd={true}>
                <Text main="O que a mídia diz sobre o Clube Candeias"></Text>
                <div className={ styles.flex }>
                    <CardNormal text={`"O Clube Candeias revolucionou a forma como as pessoas viajam. Com descontos de até 40% em hotéis de alto padrão, os associados podem explorar os principais destinos do Brasil e do mundo. Uma opção vantajosa e segura para quem busca férias inesquecíveis."`}><img src="./images/uol.png" alt="Notícia UOL" /></CardNormal>
                    <CardNormal text={`"O Clube Candeias oferece aos seus associados uma experiência de hospedagem única. Com uma ampla rede de hotéis próprios, localizados nos melhores pontos turísticos, o Clube garante qualidade, conforto e descontos exclusivos. Uma escolha inteligente para quem quer aproveitar ao máximo suas viagens."`}>
                        <img src="./images/veja.png" alt="Notícia UOL" />
                    </CardNormal>
                    <CardNormal text={`"Se você busca economia, segurança e flexibilidade nas suas viagens, o Clube Candeias é a resposta. Com uma proposta inovadora, os associados têm acesso a hotéis de altíssimo nível a preços imbatíveis. Além disso, a liberdade de viajar quantas vezes quiser durante o ano e levar convidados sem taxas extras é um diferencial que conquista os viajantes mais exigentes."`}>
                        <img src="./images/abril.png" alt="Notícia UOL" />
                    </CardNormal>
                </div>
            </Section>
            <Section bg={true} pd={true} bottom={true}>
                <Text bg={true} main="O que nossos clientes dizem"></Text>
                <div className={ styles.flex }>
                    <CardNormal type={true} text={`"O Clube Candeias tornou minhas viagens muito mais acessíveis e prazerosas. Sempre encontro ótimas opções de hospedagem com descontos incríveis. Além disso, a facilidade de reservar pelo aplicativo e a possibilidade de levar meus convidados sem taxas extras são benefícios que valorizo muito. Recomendo a todos os viajantes!"`}>
                        <div>
                            <img src="./images/poeple/1.png" alt="Cliente Candeia" />
                            <div>
                                <h3>Joana Oliveira</h3>
                                <p>32 anos</p>
                            </div>
                        </div>
                    </CardNormal>
                    <CardNormal type={true} text={`"Sou associado do Clube Candeias há alguns anos e estou extremamente satisfeito com os benefícios oferecidos. Já visitei diversos destinos incríveis e sempre encontro opções de hotéis com preços muito mais acessíveis. Além disso, o atendimento ao cliente é excelente, sempre dispostos a ajudar."`}>
                        <div>
                            <img src="./images/poeple/2.png" alt="Cliente Candeia" />
                            <div>
                                <h3>Rafael Santos</h3>
                                <p>45 anos</p>
                            </div>
                        </div>
                    </CardNormal>
                    <CardNormal type={true} text={`"O Clube Candeias tem sido um diferencial nas minhas viagens em família. A possibilidade de levar meus filhos e convidados sem custos adicionais é fantástica. Recomendo a todos que desejam aproveitar ao máximo suas viagens."`}>
                        <div>
                            <img src="./images/poeple/3.png" alt="Cliente Candeia" />
                            <div>
                                <h3>Marcela Costa</h3>
                                <p>38 anos</p>
                            </div>
                        </div>
                    </CardNormal>
                </div>
                <div className={ `${styles.flex} ${styles['review-div']}` }>
                    <div className={ styles.reviews }>
                        <img src="./images/yop.png" alt="Clientes Clube Candeias" />
                        <div>
                            <div className={ styles.flex } style={{ alignItems: 'center', gap: '12px'}}>
                                <h2>Pedro Ferreira</h2>
                                <img className={ styles.stars } src="./images/star.png" alt="Clientes Clube Candeias" />
                            </div>
                            <p>"Ser associado do Clube Candeias foi a melhor decisão que tomei. Já viajei para diversos destinos e sempre encontro opções de hospedagem com descontos exclusivos. A qualidade dos hotéis é excelente, e a tranquilidade de saber que estou sendo bem atendido é muito satisfatória. Estou muito feliz com minha escolha e recomendo a todos."</p>
                        </div>
                    </div>
                    <img src="./images/testmonials/reviews.png" alt="Avaliações dos clientes Candeias" />
                </div>
            </Section>
            <Section>
                <img src="./images/logo4.png" alt="Logo Clube Candeiras" className={ styles.logoBg } />
                <HeroFlex  main="Quem nós somos" arr={true} subtitle={['O Clube Candeias começou em 1968, quando inauguramos nossa primeira unidade em Santa Catarina, na cidade de Piçarras. No verão daquele mesmo ano, inúmeras famílias se associaram e se hospedaram nesta primeira unidade, marcando o início do sucesso e aceitação da nossa proposta.', 'Hoje, o Clube Candeias conta com dezenas de unidades próprias, oferecendo os preços mais competitivos do mercado, concretizando viagens e férias maravilhosas para centenas de milhares de famílias associadas!', 'O Clube Candeias busca inovar sempre, rompendo as barreiras do Brasil e alcançando o mundo inteiro! O portal do associado oferece uma rede com mais de 500 mil opções de hospedagens distribuídas pelos cinco continentes. Além disso, nossos associados contam também com um aplicativo exclusivo que permite realizar reservas e acessar os serviços do clube pelo celular.']}>
                <div className={ `${styles.last} ${styles['div-img']}`}>
                    <img src="./images/logo3.png" alt="Como funciona o Clube Candeias?" />
                </div>
                </HeroFlex>
            </Section>
        </main>
    )
}
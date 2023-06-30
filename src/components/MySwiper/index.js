import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper"
import React, { useRef, useState } from "react";
import styles from './Myswipper.module.css'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Text from "../Text";

export default function MySwiper({ second }) {
    if (typeof window != 'undefined') {
        var screen = window.screen.width
    }
    if (second) {
        if (parseInt(screen) <= 425) {
            return (
                <Swiper
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        1000: {
                            slidesPerView: 3
                        },
                        500: {
                            slidesPerView: 3
                        },
                        300: {
                            slidesPerView: 1
                        }
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide className="swiper-slide">
                        <div className={ styles['second-card']}>
                            <div className={ styles.img }>
                                <img src="./images/promocoes/1.png" alt="Promoçao do Candeias" />
                            </div>
                            <div className={ styles.text }>
                                <h3>Residencial Piçarras - Balneário Camboriú</h3>
                                <Text start={true}>
                                    <p>Apartamentos mobiliados com 3 quartos e 2 banheiros para até 10 pessoas para levar a família toda Ainda compra o passaporte do park direto na unidade, com desconto e bônus.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={ styles['second-card']}>
                            <div className={ styles.img }>
                                <img src="./images/promocoes/2.png" alt="Promoçao do Candeias" />
                            </div>
                            <div className={ styles.text }>
                                <h3>Foz do Iguaçu - PR</h3>
                                <Text start={true}>
                                    <p>Hotel novinho que o Candeias acabou de construir! Diárias a partir de R$ 39,00 por pessoa com café da manhã incluso.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={ styles['second-card']}>
                            <div className={ styles.img }>
                                <img src="./images/promocoes/4.png" alt="Promoçao Candeias" />
                            </div>
                            <div className={ styles.text }>
                                <h3>Residencial Mar Azul - Guaratuba/PR</h3>
                                <Text start={true}>
                                    <p>Com café da manhã incluso, 4 pessoas por 7 dias no período de alta temporada no valor de apenas R$2912.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={ styles['second-card']}>
                            <div className={ styles.img }>
                                <img src="./images/promocoes/3.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={ styles.text }>
                                <h3>Caiobá Residencial - Caiobá/PR</h3>
                                <Text start={true}>
                                    <p>Apartamento para 4 pessoas mobilidado com cozinha. Pacote de 2 diárias no valor de R$352 em baixa temporada e 7 dias em alta temporada por R$ 3199.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={ styles['second-card']}>
                            <div className={ styles.img }>
                                <img src="./images/promocoes/5.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={ styles.text }>
                                <h3>Hotel Candeias - Guaratuba/PR</h3>
                                <Text start={true}>
                                <p>Com café da manhã incluso, 4 pessoas em alta temporada por 7 dias no valor de apenas R$2912.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={ styles['second-card']}>
                            <div className={ styles.img }>
                                <img src="./images/promocoes/6.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={ styles.text }>
                                <h3>Complexo Turístico - Balneário Camboriú</h3>
                                <Text start={true}>
                                <p>Fletes mobiliados com cozinha. Pacote de diária para 6 pessoas no valor de R$352 em baixa estação e R$3031 em alta.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={ styles['second-card']}>
                            <div className={ styles.img }>
                                <img src="./images/promocoes/7.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={ styles.text }>
                                <h3>Hotel Central - Balneário Camboriú</h3>
                                <Text start={true}>
                                <p>Com café da manhã 100% incluso. Pacote de 7 dias para 2 pessoas em baixa temporada por R$2401 e alta temporada por R$3654.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={ styles['second-card']}>
                            <div className={ styles.img }>
                                <img src="./images/promocoes/8.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={ styles.text }>
                                <h3>Hotel Sanfelice - Balneário Camboriú/SC</h3>
                                <Text start={true}>
                                <p>Com café da manhã incluso. Pacote de 2 pessoas por 2 dias em baixa temporada por R$336 e pacote em alta temporada por 7 dias por apenas R$2331.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={ styles['second-card']}>
                            <div className={ styles.img }>
                                <img src="./images/promocoes/9.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={ styles.text }>
                                <h3>Edifício Viviane - Balneário Camboriú/SC</h3>
                                <Text start={true}>
                                    <p>Apartamentos mobiliados com cozinha. Pacote de 7 dias para 6 pessoas em alta temporada por apenas R$3213.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={ styles['second-card']}>
                            <div className={ styles.img }>
                                <img src="./images/promocoes/11.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={ styles.text }>
                                <h3>Hotel Parador de Cachoeira - Floripa/SC</h3>
                                <Text start={true}>
                                    <p>Com café da manhã incluso. Pacote promocional para 2 pessoas por 7 dias em alta estação por apenas R$2282.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={ styles['second-card']}>
                            <div className={ styles.img }>
                                <img src="./images/promocoes/12.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={ styles.text }>
                                <h3>Pousada Guarani - Bonito MS</h3>
                                <Text start={true}>
                                    <p>Com café da manhã incluso. Pacote promocional para 2 pessoas por 2 dias em baixa estação por apenas R$740. Para 4 pessoas no mesmo período por R$1135.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
        )
        }
        return (
                <Swiper
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        1000: {
                            slidesPerView: 3
                        },
                        500: {
                            slidesPerView: 3
                        },
                        300: {
                            slidesPerView: 1
                        }
                    }}
                    initialSlide={1}
                    className="mySwiper"
                >
                    <SwiperSlide className="swiper-slide">
                        <div className={ styles['second-card']}>
                            <div className={ styles.img }>
                                <img src="./images/promocoes/1.png" alt="Promoçao do Candeias" />
                            </div>
                            <div className={ styles.text }>
                                <h3>Residencial Piçarras - Balneário Camboriú</h3>
                                <Text start={true}>
                                    <p>Apartamentos mobiliados com 3 quartos e 2 banheiros para até 10 pessoas para levar a família toda Ainda compra o passaporte do park direto na unidade, com desconto e bônus.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={ styles['second-card']}>
                            <div className={ styles.img }>
                                <img src="./images/promocoes/2.png" alt="Promoçao do Candeias" />
                            </div>
                            <div className={ styles.text }>
                                <h3>Foz do Iguaçu - PR</h3>
                                <Text start={true}>
                                    <p>Hotel novinho que o Candeias acabou de construir! Diárias a partir de R$ 39,00 por pessoa com café da manhã incluso.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={ styles['second-card']}>
                            <div className={ styles.img }>
                                <img src="./images/promocoes/4.png" alt="Promoçao Candeias" />
                            </div>
                            <div className={ styles.text }>
                                <h3>Residencial Mar Azul - Guaratuba/PR</h3>
                                <Text start={true}>
                                    <p>Com café da manhã incluso, 4 pessoas por 7 dias no período de alta temporada no valor de apenas R$2912.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={ styles['second-card']}>
                            <div className={ styles.img }>
                                <img src="./images/promocoes/3.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={ styles.text }>
                                <h3>Caiobá Residencial - Caiobá/PR</h3>
                                <Text start={true}>
                                    <p>Apartamento para 4 pessoas mobilidado com cozinha. Pacote de 2 diárias no valor de R$352 em baixa temporada e 7 dias em alta temporada por R$ 3199.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={ styles['second-card']}>
                            <div className={ styles.img }>
                                <img src="./images/promocoes/5.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={ styles.text }>
                                <h3>Hotel Candeias - Guaratuba/PR</h3>
                                <Text start={true}>
                                <p>Com café da manhã incluso, 4 pessoas em alta temporada por 7 dias no valor de apenas R$2912.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={ styles['second-card']}>
                            <div className={ styles.img }>
                                <img src="./images/promocoes/6.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={ styles.text }>
                                <h3>Complexo Turístico - Balneário Camboriú</h3>
                                <Text start={true}>
                                <p>Fletes mobiliados com cozinha. Pacote de diária para 6 pessoas no valor de R$352 em baixa estação e R$3031 em alta.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={ styles['second-card']}>
                            <div className={ styles.img }>
                                <img src="./images/promocoes/7.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={ styles.text }>
                                <h3>Hotel Central - Balneário Camboriú</h3>
                                <Text start={true}>
                                <p>Com café da manhã 100% incluso. Pacote de 7 dias para 2 pessoas em baixa temporada por R$2401 e alta temporada por R$3654.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={ styles['second-card']}>
                            <div className={ styles.img }>
                                <img src="./images/promocoes/8.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={ styles.text }>
                                <h3>Hotel Sanfelice - Balneário Camboriú/SC</h3>
                                <Text start={true}>
                                <p>Com café da manhã incluso. Pacote de 2 pessoas por 2 dias em baixa temporada por R$336 e pacote em alta temporada por 7 dias por apenas R$2331.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={ styles['second-card']}>
                            <div className={ styles.img }>
                                <img src="./images/promocoes/9.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={ styles.text }>
                                <h3>Edifício Viviane - Balneário Camboriú/SC</h3>
                                <Text start={true}>
                                    <p>Apartamentos mobiliados com cozinha. Pacote de 7 dias para 6 pessoas em alta temporada por apenas R$3213.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={ styles['second-card']}>
                            <div className={ styles.img }>
                                <img src="./images/promocoes/11.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={ styles.text }>
                                <h3>Hotel Parador de Cachoeira - Floripa/SC</h3>
                                <Text start={true}>
                                    <p>Com café da manhã incluso. Pacote promocional para 2 pessoas por 7 dias em alta estação por apenas R$2282.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={ styles['second-card']}>
                            <div className={ styles.img }>
                                <img src="./images/promocoes/12.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={ styles.text }>
                                <h3>Pousada Guarani - Bonito MS</h3>
                                <Text start={true}>
                                    <p>Com café da manhã incluso. Pacote promocional para 2 pessoas por 2 dias em baixa estação por apenas R$740. Para 4 pessoas no mesmo período por R$1135.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
        )
    }
    return (
        // <div className={ styles['swiper-div'] }>
            <Swiper
                slidesPerView={2}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    1000: {
                        slidesPerView: 2
                    },
                    500: {
                        slidesPerView: 3
                    },
                    300: {
                        slidesPerView: 1
                    }
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>COMO SE VOCÊ FOSSE DONO DE UMA CASA OU APARTAMENTE EM CADA PONTO TURISTICO DO BRASIL</h3>
                        <Text bg={true} start={true}>
                            <p>Já imaginou como seria se VOCÊ tivesse uma casa ou apartamento em cada ponto turístico do Brasil?</p>
                            <p><strong>Pois ser um sócio Candeias é exatamente assim... melhor ainda, sem nenhum custo com impostos, cuidados ou manutenção de imóveis...</strong></p>
                            <p>Pode ser para um simples final de semana que você queira sair da rotina...</p>
                            <p>Pode ser para passar um feriado prolongado na praia... ou ainda sair de férias.</p>
                            <p>Você já vai perceber a diferença que faz ser um associado Candeias!</p>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>MAIS DE 40 UNIDADES PRÓPRIAS NO BRASIL E MAIS DE 500.000 HOTÉIS NO MUNDO TODO</h3>
                        <Text bg={true} start={true}>
                            <p>Escolha seu destino entre hotéis, apart hotéis, apartamentos mobiliados e condomínios de casas no mundo todo</p> 
                            <p>O Candeias leva você e sua família com todo conforto e segurança, com economia e você ainda é bonificado.</p>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>COMODIDADE DESDE RESERVA ATÉ O CHECK OUT</h3>
                        <Text bg={true} start={true}>
                            <p>Ao se associar ao Candeias, você deixa de se preocupar em procurar lugar para se hospedar; ficar preocupado se o local realmente existe ou pode ser um golpe... </p>
                            <p>Agora você passa a fazer parte do maior Clube de férias do mundo e vai ficar num Candeias...</p>
                            <p>Aqui é muito fácil aproveitar o que a vida tem de melhor.</p>
                            <p><strong>Desde o momento de escolher o seu destino até o final de sua viagem nossa equipe vai lhe acompanhar.</strong></p>
                            <p><strong>Tudo no Candeias é muito fácil.</strong></p>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>NÃO É UM SIMPLES ALUGUEL... É UM CANDEIAS!</h3>
                        <Text bg={true} start={true}>
                            <p><strong>Talvez você já tenha ouvido ou até passou pela frustração de alugar uma hospedagem que não correspondia com o combinado... No Candeias você e sua família só terão alegria!</strong></p>
                            <p>Você não é exceção!</p>
                            <p></p>
                            <p></p>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>EXCELÊNCIA EM HOSPEDAGEM COM UNIDADES DE ALTA QUALIDADE E OPÇÕES DE LAZER</h3>
                        <Text bg={true} start={true}>
                            <p>Muitos proprietários particulares deixam o imóvel fechado o ano todo e quando são alugados estão cheirando mofo e faltando limpeza adequada para acomodar os novos hospedes. Sem falar na frustração do local não ser igual o esperado.</p>
                            <p><strong>As unidades Candeias são de excelente qualidade oferecem opções de lazer como:</strong></p>
                            <p>Piscinas adulto e infantil, Sauna, Sala de jogos, Play grawd, Vôlei de praia, Futebol de areia, Churrasqueiras, Monitores para crianças, </p>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>REMIDO PARA FÉRIAS VITALÍCIAS SEM MENSALIDADES OU TAXA DE MANUTENÇÃO</h3>
                        <Text bg={true} start={true}>
                            <p><strong>Com um único investimento você garante férias para a vida toda.</strong></p>
                            <p>Nosso Título é REMIDO ou seja: sem mensalidades, anuidades ou taxas de manutenção. Além disso, você pode incluir todos os seus Dependentes.</p>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>PATRIMÔNIO VITALÍCIO E HEREDITÁRIO</h3>
                        <Text bg={true} start={true}>
                            <p><strong>Sim, o Candeias é um pequeno e único investimento. Um patrimônio de qualidade de vida passado dos pais para os filhos.</strong></p>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>SEGURANÇA E PRIVACIDADE EVITE PROBLEMAS COM C MERAS ESCONDIDAS</h3>
                        <Text bg={true} start={true}>
                            <p><strong>Imagina sua intimidade exposta, sendo vigiado por câmeras escondidas? Num Candeias você e sua família estarão seguros!</strong></p>
                            <p>Se tiver curiosidade, veja abaixo o que pode acontecer nestes sites de reservas de hospedagens...</p>
                            <a className={ styles.link } href="https://canaltech.com.br/seguranca/anfitriao-do-airbnb-e-preso-apos-camera-oculta-ser-encontrada-no-quarto-138951/" target="_blank">Anfitrião do Airbnb é preso após câmera oculta ser encontrada no quarto</a>
                            <a className={ styles.link } href="https://tecnoblog.net/responde/como-descobrir-cameras-escondidas-airbnb/">Como descobrir câmeras escondidas ao alugar via AirBnb</a>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>PLATAFORMA DE RESERVAS ON LINE - APP - 0800 E LOJAS DE ATENDIMENTO</h3>
                        <Text bg={true} start={true}>
                            <p><strong>Aqui Você é VIP!</strong></p>
                            <p>O associado Candeias tem uma plataforma própria para fazer suas reservas e programação de férias, através do site, APP, 0800, e lojas de atendimento presencial.</p>
                            <p></p>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>LEVE SEUS CONVIDADOS SEM TAXAS EXTRAS</h3>
                        <Text bg={true} start={true}>
                            <p><strong>O associado Candeias pode levar quem quiser como convidado em qualquer de nossas unidades, quantas vezes quiser sem taxas extras.</strong></p>
                            <p></p>
                            <p></p>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>ACOMODAÇOES GRANDES QUE ACOMODAM ATÉ 10 PESSOAS</h3>
                        <Text bg={true} start={true}>
                            <p><strong>Nas unidades Candeias temos aposentos para até 10 pessoas em apartamentos com 3 quartos e dois banheiros para você levar amigos e familiares para compartilhar os bons momentos.</strong></p>
                            <p></p>
                            <p></p>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>NÃO EXISTE CARÊNCIA APROVEITE OS BENEFÍCIOS IMEDIATAMENTE</h3>
                        <Text bg={true} start={true}>
                            <p><strong>Você não precisa esperar para aproveitar todas essas vantagens, assim que você se torna um sócio já está liberado para usufruir de qualquer hospedagem ou benefícios.</strong></p>
                            <p></p>
                            <p></p>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>PROGRAMA DE RECOMPENSAS</h3>
                        <Text bg={true} start={true}>
                            <p><strong>Todas as vezes que você ou seus dependentes utilizarem um dos mais de 500 mil hotéis da rede credenciada, o valor retorna em pontos para pagar diárias nas unidades próprias do Clube. Cada R$ 1,00 = 1 ponto.</strong></p>
                            <p></p>
                            <p></p>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>PARCERIAS DE LAZER COM BÔNUS NAS ATRAÇÕES TURÍSTICAS</h3>
                        <Text bg={true} start={true}>
                            <p><strong>O Candeias possui convênio de parcerias com várias atrações turísticas das cidades: parques, museus, passeios, eventos e muito mais...</strong></p>
                            <p></p>
                            <p></p>
                        </Text>
                    </div>
                </SwiperSlide>
            </Swiper>
        // </div>
    ) 
}
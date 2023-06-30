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
                                    <p>Diárias a partir de R$25. Apartamentos mobiliados com 3 quartos e 2 banheiros para até 10 pessoas para levar a família toda Ainda compra o passaporte do park direto na unidade, com desconto e bônus.</p>
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
                                    <p>Diárias a partir de R$25 por pessoa. Apartamentos mobiliados com 3 quartos e 2 banheiros para até 10 pessoas para levar a família toda.</p>
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
    if (parseInt(screen) <= 425) {
        
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
                initialSlide={1}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>COMO SE VOCÊ FOSSE DONO DE UMA CASA OU APARTAMENTO EM CADA PONTO TURÍSTICO DO BRASIL</h3>
                        <Text bg={true} start={true}>
                            <p>Pois ser um sócio Candeias é exatamente assim... melhor ainda, sem nenhum custo com impostos, cuidados ou manutenção de imóveis...</p>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>PREÇO IMBATÍVEL: ATÉ 60% DE ECONOMIA</h3>
                        <Text bg={true} start={true}>
                            <p>O Clube Candeias não tem fins lucrativos, por isso os preços das nossas diárias ficam bem abaixo dos preços particulares.</p>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>MAIS DE 40 UNIDADES PRÓPRIAS DE NORTE A SUL DO BRASIL</h3>
                        <Text bg={true} start={true}>
                            <p>Escolha seu destino entre hotéis, apartamentos mobiliados e condomínios de casas e chalés.</p>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>REMIDO PARA FÉRIAS VITALÍCIAS</h3>
                        <Text bg={true} start={true}>
                            <p>Com um único investimento você garante férias para a vida toda.</p>
                            <p>Sem mensalidades, anuidades ou taxas de manutenção. Além disso, você pode incluir todos os seus Dependentes.</p>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>COMODIDADE DESDE RESERVA ATÉ O CHECK OUT</h3>
                        <Text bg={true} start={true}>
                            <p>Desde o momento de escolher o seu destino até o final de sua viagem nossa equipe vai lhe acompanhar.</p>
                            <p> Tudo no Candeias é muito fácil E SEGURO.</p>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>NÃO É UM SIMPLES ALUGUEL... É UM CANDEIAS!</h3>
                        <Text bg={true} start={true}>
                            <p>Talvez você já ouviu ou até passou pela frustração de alugar uma hospedagem que não correspondia com o combinado...</p>
                            <p>No Candeias você e sua família só terão alegria!</p>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>EXCELÊNCIA EM HOSPEDAGEM COM UNIDADES DE ALTA QUALIDADE E OPÇÕES DE LAZER</h3>
                        <Text bg={true} start={true}>
                            <p>As unidades Candeias são de excelente qualidade oferecem opções de lazer como:</p>
                            <p>Piscinas adulto e infantil, sauna, sala de jogos, play ground, vôlei de praia, futebol de areia, churrasqueiras, monitores para crianças.</p>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>LEVE SEUS CONVIDADOS SEM TAXAS EXTRAS</h3>
                        <Text bg={true} start={true}>
                            <p>O associado Candeias pode levar quem quiser como convidado em qualquer de nossas unidades, quantas vezes quiser sem taxas extras.</p>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>ACOMODAÇÕES GRANDES QUE ACOMODAM ATÉ 10 PESSOAS</h3>
                        <Text bg={true} start={true}>
                            <p>Nas unidades Candeias temos aposentos para até 10 pessoas em apartamentos com 3 quartos e dois banheiros para você levar amigos e familiares para compartilhar os bons momentos.</p>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>NÃO EXISTE CARÊNCIA, APROVEITE OS BENEFÍCIOS IMEDIATAMENTE</h3>
                        <Text bg={true} start={true}>
                            <p>Você não precisa esperar para aproveitar todas essas vantagens, assim que você se torna um sócio já está liberado para usufruir de qualquer hospedagem ou benefícios.</p>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>PROGRAMA DE RECOMPENSAS</h3>
                        <Text bg={true} start={true}>
                            <p>Todas as vezes que você ou seus dependentes utilizarem um dos mais de 500 mil hotéis da rede credenciada, o valor retorna em pontos para pagar diárias nas unidades próprias do Clube.</p>
                            <p>Cada R$1,00 = 1 ponto.</p>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>SEGURANÇA E PRIVACIDADE</h3>
                        <Text bg={true} start={true}>
                            <p>Imagina sua intimidade exposta, sendo vigiado por câmeras escondidas?</p>
                            <p>Num Candeias você e sua família estarão seguros!</p>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>PLATAFORMA DE RESERVAS ON LINE</h3>
                        <Text bg={true} start={true}>
                            <p>O associado Candeias tem uma plataforma própria para fazer suas reservas e programação de férias ou ainda pelo APP ou 0800 e Lojas de Atendimento Presencial.</p>
                            <p>Aqui você é VIP</p>
                            <p></p>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>PARCERIAS DE LAZER COM BÔNUS NAS ATRAÇÕES TURÍSTICAS</h3>
                        <Text bg={true} start={true}>
                            <p>O Candeias possui convênio de parcerias com várias atrações turísticas das cidades: parques, museus, passeios, eventos e muito mais...</p>
                        </Text>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ styles.card }>
                        <h3>PATRIMÔNIO VITALÍCIO E HEREDITÁRIO</h3>
                        <Text bg={true} start={true}>
                            <p>Sim, o Candeias é um investimento, um patrimônio de qualidade de vida passado dos pais para os filhos.</p>
                        </Text>
                    </div>
                </SwiperSlide>
            </Swiper>
        // </div>
    ) 
}
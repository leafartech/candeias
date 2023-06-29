import Text from '@/components/Text'
import styles from './ThanksScreen.module.css'
import Section from '@/components/Section'
import { useEffect } from 'react';

export default function ThanksScreen() {
    return (
        <div className={ styles['thanks-screen']}>
            <Section className={ styles.text }>
                {/* <h1>Muito obrigado</h1> */}
                <Text main="Muito obrigado!" />
                <h3>Em breve entraremos em contato!</h3>
                <img src="./images/logo.png" alt="Logo do Clube Candeias" />
                 {/* <div className="_form_5"></div> */}
            </Section>

        </div>
    )
}
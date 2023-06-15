import Text from '@/components/Text'
import styles from './ThanksScreen.module.css'
import Section from '@/components/Section'
import { useEffect } from 'react';

export default function ThanksScreen() {

    let cont = 0
    useEffect(() => {
        if (cont === 0) {
            const script = document.createElement('script');
            script.src = 'https://rafaeltramontin98.activehosted.com/f/embed.php?id=5';
            script.type = 'text/javascript';
            script.charset = 'utf-8';
            document.body.appendChild(script);
    
            // return () => {
            // document.body.removeChild(script);
            // };
            cont ++
        }
  }, []);
    return (
        <div className={ styles['thanks-screen']}>
            <Section className={ styles.text }>
                {/* <h1>Muito obrigado</h1> */}
                {/* <Text main="Muito obrigado!" />
                <h3>Em breve entraremos em contato!</h3> */}
                <img src="./images/logo.png" alt="Logo do Clube Candeias" />
                 <div className="_form_5"></div>
            </Section>

        </div>
    )
}
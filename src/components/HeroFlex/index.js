import Button from '../Button'
import Text from '../Text'
import styles from './HeroFlex.module.css'

export default function HeroFlex({head, children, main, subtitle, img, arr, buttonClicked }) {
    return (
        <div className={ styles['hero-flex']}>
            <div className={ `${head ? styles.head : ''} ${styles.text}` }>
                {img ?
                <img className={ styles.img } src="./images/logo.png" alt="Logo Clube Candeias" />
                : ''}
                <Text start={true} main={main} >
                    {arr ?
                        subtitle.map((txt, index) => (
                            <p key={index} style={{ marginTop: '18px'}}>{txt}</p>
                        ))
                    :
                    <p style={{ marginTop: '30px'}}>{subtitle}</p>
                    }
                </Text>
                <Button path="" buttonClicked={buttonClicked}>Quero participar do Clube Candeias</Button>
            </div>
            {children}
        </div>
    )
}
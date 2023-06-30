import Header from '@/components/Header'
import styles from './HomeScreen.module.css'
import Main from '@/components/Main'

export default function HomeScreen() {
    return (
        <div className={ styles['home-screen']}>
            <Main />
        </div>
    )
}
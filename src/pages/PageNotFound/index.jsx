import img from './error-pirataflix.jpg'
import styles from './PageNotFound.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const PageNotFound = () => {
    return(
        <>
        <Header />
        <section className={styles.container}>
            <h1>Ops! Conteúdo não encontrado!</h1>
            <img src={img} alt="Page not found" />
        </section>
        <Footer />
        </>
    );
}

export default PageNotFound;
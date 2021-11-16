import Banner from "../components/Banner";
import Header from "../components/Header";
import styles from "../styles/pages/HomePage.module.scss";

function HomePage () {
    return (
        <div className={styles.container}>
            <Header />
            <Banner />
        </div>
    );
}

export default HomePage;

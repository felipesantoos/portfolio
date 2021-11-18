import About from "../components/About";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Numbers from "../components/Numbers";
import SecondBanner from "../components/SecondBanner";

import styles from "../styles/pages/HomePage.module.scss";

function HomePage () {
    return (
        <div className={styles.container}>
            <Header />
            <Banner />
            <About />
            <Numbers />
            <SecondBanner />
        </div>
    );
}

export default HomePage;

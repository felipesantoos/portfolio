import About from "../components/About";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Numbers from "../components/Numbers";
import Work from "../components/Work";

import Woman from "../../assets/images/woman.jpg";
import Blonde from "../../assets/images/blonde.jpg";
import Photographer from "../../assets/images/photographer.jpg";

import styles from "../styles/pages/HomePage.module.scss";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function HomePage () {
    return (
        <div className={styles.container} id="home">
            <Header />
            <Banner
                imgSrc={Woman}
                imgClass="primary"
                text="MY WEBSITE PORTFOLIO"
                textClass="primary"
            />
            <About />
            <Numbers />
            <Banner
                imgSrc={Blonde}
                imgClass="normal"
                text="PORTFOLIO"
                version="v1"
            />
            <Work />
            <Banner
                imgSrc={Photographer}
                imgClass="normal"
                version="v2"
                text="CONTACT"
            />
            <Contact />
            <Footer />
        </div>
    );
}

export default HomePage;

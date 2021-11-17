import Woman from "../../assets/images/woman.jpg";

import styles from "../styles/components/Banner.module.scss";

function Banner() {
    return (
        <div className={styles.container}>
            <img src={Woman} alt="" />
            <h1>MY WEBSITE PORTFOLIO</h1>
        </div>
    );
}

export default Banner;
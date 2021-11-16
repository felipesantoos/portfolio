import Woman from "../../assets/images/woman.jpg";

import styles from "../styles/components/Banner.module.scss";

function Banner() {
    return (
        <div className={styles.container}>
            <img src={Woman} alt="" />
            <span>MY WEBSITE PORTFOLIO</span>
        </div>
    );
}

export default Banner;
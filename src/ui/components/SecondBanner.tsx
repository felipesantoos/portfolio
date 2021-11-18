import LonelyWoman from "../../assets/images/lonely-woman.jpg";

import styles from "../styles/components/SecondBanner.module.scss";

function SecondBanner() {
    return (
        <div className={styles.container}>
            <img src={LonelyWoman} alt="" />
            <h1>PORTFOLIO</h1>
        </div>
    );
}

export default SecondBanner;

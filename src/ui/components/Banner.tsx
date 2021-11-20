import { version } from "process";
import styles from "../styles/components/Banner.module.scss";

interface BannerProps {
    imgSrc: string;
    imgAlt?: string;
    imgClass: "primary" | "normal" | "normal";
    version?: "" | "v1" | "v2";
    text: string;
    textClass?: "primary" | "normal";
}

function Banner({ imgSrc, imgAlt = "", text, textClass="normal", imgClass, version="" }: BannerProps) {
    return (
        <div className={styles.container}>
            <img src={imgSrc} alt={imgAlt} className={`${styles[imgClass]} ${styles[version]}`} />
            <h1 className={styles[textClass]}>{text}</h1>
        </div>
    );
}

export default Banner;
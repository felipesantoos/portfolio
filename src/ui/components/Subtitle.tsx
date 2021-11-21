import { ReactNode } from "react";
import styles from "../styles/components/Subtitle.module.scss";

interface SubtitleProps {
    children: ReactNode;
}

function Subtitle({ children }: SubtitleProps) {
    return (
        <span className={styles.container}>{children}</span>
    );
}

export default Subtitle;

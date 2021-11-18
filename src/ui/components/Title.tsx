import { ReactNode } from "react";
import styles from "../styles/components/Title.module.scss";

interface TitleProps {
    children: ReactNode;
}

function Title({ children }: TitleProps) {
    return (
        <h1 className={styles.container}>{children}</h1>
    );
}

export default Title;

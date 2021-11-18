import styles from "../styles/components/NumberItem.module.scss";

interface NumberItemProps {
    title: string;
    describe: string;
}

function NumberItem({ title, describe }: NumberItemProps) {
    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            <span>{describe}</span>
        </div>
    );
}

export default NumberItem;

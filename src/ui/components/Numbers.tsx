import styles from "../styles/components/Numbers.module.scss";
import NumberItem from "./NumberItem";

function Number() {
    return (
        <div className={styles.container}>
            <NumberItem title="14+" describe="Partners" />
            <NumberItem title="55+" describe="Projects Done" />
            <NumberItem title="89+" describe="Happy Clients" />
            <NumberItem title="150+" describe="Meetings" />
        </div>
    );
}

export default Number;

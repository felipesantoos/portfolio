import Title from "./Title";

import P1 from "../../assets/images/p1.jpg";
import P2 from "../../assets/images/p2.jpg";
import P3 from "../../assets/images/p3.jpg";
import P4 from "../../assets/images/p4.jpg";
import P5 from "../../assets/images/p5.jpg";
import P6 from "../../assets/images/p6.jpg";
import P7 from "../../assets/images/p7.jpg";
import P8 from "../../assets/images/p8.jpg";

import styles from "../styles/components/Work.module.scss";

function Work() {
    return (
        <div className={styles.container}>
            <Title>MY WORK</Title>
            <p>Here are some of my latest lorem work ipsum tipsum.</p>
            <span>Click on the images to make them bigger</span>
            <div>
                <img src={P1} alt="" />
                <img src={P2} alt="" />
                <img src={P3} alt="" />
                <img src={P4} alt="" />
                <img src={P5} alt="" />
                <img src={P6} alt="" />
                <img src={P7} alt="" />
                <img src={P8} alt="" />
            </div>
            <button>LOAD MORE</button>
        </div>
    );
}

export default Work;

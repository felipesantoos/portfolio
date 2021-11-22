import { BsPersonFill, BsFillCameraFill, BsLaptop, BsImage } from "react-icons/bs";
import AvatarHat from "../../assets/images/avatar_hat.jpg";

import styles from "../styles/components/About.module.scss";
import Skill from "./Skill";
import Subtitle from "./Subtitle";
import Title from "./Title";

function About() {
    return (
        <div className={styles.container} id="about">
            <div className={styles.top}>
                <Title>ABOUT ME</Title>
                <Subtitle>I love photography</Subtitle>
                <p>
                    We have created a fictional "personal" website/blog, and our
                    fictional character is a hobby photographer. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </p>
            </div>
            <div className={styles.center}>
                <div className={styles.profile}>
                    <h4>
                        <BsPersonFill />
                        <span>My Name</span>
                    </h4>
                    <img src={AvatarHat} alt="" />
                </div>
                <p>
                    Welcome to my website. I am lorem ipsum consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className={styles.bottom}>
                <h3>Im really good at:</h3>
                <div className={styles.skillsGroup}>
                    <Skill
                        Icon={BsFillCameraFill}
                        name="Photography"
                        percentage={90}
                    />
                    <Skill
                        Icon={BsLaptop}
                        name="Web Design"
                        percentage={85}
                    />
                    <Skill
                        Icon={BsImage}
                        name="Photoshop"
                        percentage={75}
                    />
                </div>
            </div>
        </div>
    );
}

export default About;

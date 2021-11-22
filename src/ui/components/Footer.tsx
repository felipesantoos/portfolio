import { TiArrowUpThick } from "react-icons/ti";
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { FaSnapchat, FaPinterestP } from "react-icons/fa";

import styles from "../styles/components/Footer.module.scss";

function Footer() {
    return (
        <div className={styles.container}>
            <a href="#home">
                <TiArrowUpThick />
                <span>To the top</span>
            </a>
            <div>
                <AiFillFacebook />
                <AiFillInstagram />
                <FaSnapchat />
                <FaPinterestP />
                <AiOutlineTwitter />
                <AiFillLinkedin />
            </div>
            <p>Powered by <span>felipesantoos</span></p>
        </div>
    );
}

export default Footer;

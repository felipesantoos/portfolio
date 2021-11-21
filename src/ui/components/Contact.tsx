import Subtitle from "./Subtitle";
import Title from "./Title";
import Map from "../../assets/images/map.jpg";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { FaCoffee, FaTelegramPlane } from "react-icons/fa";

import styles from "../styles/components/Contact.module.scss";

function Contact() {
    return (
        <div className={styles.container}>
            <Title>WHERE I WORK</Title>
            <Subtitle>I'd love your feedback!</Subtitle>
            <div>
                <img src={Map} alt="" />
                <div>
                    <div>
                        <MdLocationOn />
                        <span>Chicago, US</span>
                    </div>
                    <div>
                        <MdPhone />
                        <span>Phone: +00 151515</span>
                    </div>
                    <div>
                        <MdEmail />
                        <span>Email: mail@mail.com</span>
                    </div>
                    <span>Swing by for a cup of <FaCoffee />, or leave me a note:</span>
                    <form>
                        <div>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="E-mail" />
                        </div>
                        <input type="text" placeholder="Message" />
                        <button>
                            <FaTelegramPlane />
                            <span>SEND MESSAGE</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;

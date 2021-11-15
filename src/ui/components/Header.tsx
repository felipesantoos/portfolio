
import { ImHome } from "react-icons/im";
import { BiSearch } from "react-icons/bi";
import { BsFillPersonFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";

import styles from "../styles/components/Header.module.scss";
import MenuItem from "./MenuItem";

function Header() {
    return (
        <header className={styles.container}>
            <div>
                <MenuItem
                    href="#banner"
                    Icon={ImHome}
                    text="Home"
                />
                <MenuItem
                    href="#about"
                    Icon={BsFillPersonFill}
                    text="About"
                />
                <MenuItem
                    href="#portfolio"
                    Icon={BsFillGrid3X3GapFill}
                    text="Portfolio"
                />
                <MenuItem
                    href="#contact"
                    Icon={MdMail}
                    text="Contact"
                />
            </div>
            <button>
                <BiSearch />
            </button>
        </header>
    );
}

export default Header;

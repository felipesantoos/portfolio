import { createRef, useEffect } from "react";

import { ImHome } from "react-icons/im";
import { BiSearch } from "react-icons/bi";
import { BsFillPersonFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";

import styles from "../styles/components/Header.module.scss";
import MenuItem from "./MenuItem";

function Header() {
    const headerRef = createRef<HTMLElement>();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (headerRef.current) {
                if (document.body.scrollTop > 100 
                    || document.documentElement.scrollTop > 100) {
                    headerRef.current.style.backgroundColor = "white";
                    headerRef.current.style.boxShadow = "0 0 3px rgba(0, 0, 0, 0.25)";
                } else {
                    headerRef.current.style.backgroundColor = "transparent";
                    headerRef.current.style.boxShadow = "none"
                }
            }
        });
        // eslint-disable-next-line
    }, []);

    return (
        <header ref={headerRef} className={styles.container}>
            <div>
                <MenuItem
                    href="#home"
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

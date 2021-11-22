import { createRef, useEffect } from "react";

import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { ImHome } from "react-icons/im";
import { BiSearch } from "react-icons/bi";
import { BsFillPersonFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";

import styles from "../styles/components/Header.module.scss";
import MenuItem from "./MenuItem";

function Header() {
    const headerRef = createRef<HTMLElement>();
    const menuRef = createRef<HTMLDivElement>();
    let isShowMenu = false;

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (headerRef.current) {
                if (document.body.scrollTop > 100
                    || document.documentElement.scrollTop > 100) {
                    headerRef.current.style.backgroundColor = "white";
                    headerRef.current.style.boxShadow = "0 0 3px rgba(0, 0, 0, 0.25)";
                } else {
                    headerRef.current.style.backgroundColor = "transparent";
                    headerRef.current.style.boxShadow = "none";
                }
            }
        });
        // eslint-disable-next-line
    }, []);

    const mql = window.matchMedia("(max-width: 600px)");

    function toggleMenu(event: MediaQueryListEvent) {
        if (event.matches) {
            if (menuRef.current) {
                menuRef.current.style.display = "none";
                isShowMenu = false;
            }
        } else {
            if (menuRef.current) {
                menuRef.current.style.display = "flex";
                isShowMenu = true;
            }
        }
    }

    mql.addEventListener("change", toggleMenu);

    function onClickToggleMenu() {
        if (menuRef.current) {
            if (isShowMenu) {
                menuRef.current.style.display = "none";
                isShowMenu = false;
            } else {
                menuRef.current.style.display = "flex";
                isShowMenu = true;
            }
        }
    }

    return (
        <header ref={headerRef} className={styles.container}>
            <div>
                <BiMenu onClick={onClickToggleMenu} />
                <div ref={menuRef}>
                    <IoClose onClick={onClickToggleMenu} />
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
            </div>
            <button>
                <BiSearch />
            </button>
        </header>
    );
}

export default Header;

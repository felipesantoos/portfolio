import React, { ReactNode } from "react";
import { IconType } from "react-icons/lib";
import styles from "../styles/components/MenuItem.module.scss";

interface MenuItemProps {
    href: string;
    Icon: IconType;
    text: string;
}

function MenuItem({href, Icon, text}: MenuItemProps) {
    return (
        <a className={styles.container} href={href}>
            <Icon />
            <span>{text}</span>
        </a>
    );
}

export default MenuItem;

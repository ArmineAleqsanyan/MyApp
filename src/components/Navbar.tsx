// components/Navbar.tsx
import React, { useState } from "react";
import Link from "next/link";
import styles from "@/styles/NavbarStyles.module.css";
import { IoSunnyOutline } from "react-icons/io5";

import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { clsx } from "clsx";
import DarkModeButton from "./DarkMode";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className={styles.navbar}>
      <div className={styles.nav}>
        <ul className={clsx(styles.menu, click ? styles.active : styles.menu)}>
          <li className={styles.navLink}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/work">Work</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/contact">Contact</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="#">More</Link>
          </li>
        </ul>
        <div onClick={handleClick} className={styles.bars}>
          {click ? (
            <FaTimes size={20} style={{ color: "azure" }} />
          ) : (
            <FaBars size={20} style={{ color: "azure" }} />
          )}
        </div>
        <div className={styles.social}>
          <FaFacebook size={20} style={{ marginRight: "5px" }} />
          <FaGithub size={20} style={{ marginRight: "5px" }} />
          <FaLinkedin size={20} style={{ marginRight: "5px" }} />
          <DarkModeButton />
        </div>
      </div>
    </div>
  );
};
export default Navbar;

import React from "react";
import styles from "./nav.module.css";

function moveUp() {
    window.scroll({ top: 0, behavior: "smooth" });
}

let moveDown = (e)=> {
    if (e.target.innerHTML == "About Us") {
        window.scroll({ top: 750, behavior: "smooth" });
    }

    else if (e.target.innerHTML == "Feature") {
        window.scroll({ top: 1400, behavior: "smooth" });
    } 
    else if (e.target.innerHTML == "Contact") {
        window.scroll({ top:3000, behavior: "smooth" });
    } 
}

function Nav(){
    return <div className={styles["nav"]}>
    <span className={styles["logo"]}>Noah</span>
    <div className={styles["nav-content"]}>
        <span onClick={moveUp}>Home</span><span onClick={moveDown}>About Us</span><span onClick={moveDown}>Feature</span><span onClick={moveDown}>Contact</span>
    </div></div>
}

export default Nav;
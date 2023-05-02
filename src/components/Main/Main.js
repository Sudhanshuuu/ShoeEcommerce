import React from "react";
import Img from "./JordanImg.jpg";
import styles from "./Main.module.css";

function Main(){
    return (    <div className={styles["intro"]}>
    <div className={styles["intro-subSection"]}>
        <div className={styles["intro-head"]}>Find your Shoes</div>
        <div className={styles["intro-text"]}>
        <div>I like your skechers </div>
       <div>You like me my gucci shoes</div>
        <button>Buy</button>
        </div>
    </div>
    <div>
    <img src={Img} alt="nike-jordan" />
    </div>
</div>
)
}

export default Main;
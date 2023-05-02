import React from "react";
import Img1 from "./BoxImg.png";
import Img2 from "./VerifyImg.jpg";
import Img3 from "./serviceImg.jpg";
import styles from "./AboutUs.module.css";

function AboutUs(){
    return(
        <section className={styles["prop"]}>
        <div className={styles["prop-subSection"]}>
            <img src={Img1}    alt="tick-box" />
            <div>100% Verified</div>
            <div>Lorem ipsum dolor sit amet consect</div>
        </div>
        <div className={styles["prop-subSection"]}>
            <img src={Img2} alt="return-box" />
            <div>Return Available</div>
            <div>Lorem ipsum dolor sit amet consect</div>
        </div>
        <div className={styles["prop-subSection"]}>
            <img src={Img3} alt="service-box" />
            <div>24*7 Service</div>
            <div>Lorem ipsum dolor sit amet consect</div>
        </div>
    </section>

    )
}

export default AboutUs;
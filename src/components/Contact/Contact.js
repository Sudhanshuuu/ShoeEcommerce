import React from "react";
import styles from "./Contact.module.css";

function Contact(){
return(
    <footer>
        <div className={styles["head"]}>Customer Care</div>
        <div className={styles["content"]}>
            <div>
                <span className={styles["heading"]}>Noah</span> <span>Shop</span> <span>about us</span> <span>inspiration</span>
            </div>
            <div>
                <span className={styles["heading"]}>support</span> <span>FAQs</span> <span>Assembly</span> <span>Contact</span>
            </div>
            <div>
                <span className={styles["heading"]}>info</span> <span>delivery</span> <span>Shipment</span> <span>Condition</span>
            </div>
        </div>
    </footer>
    )
}

export default Contact;
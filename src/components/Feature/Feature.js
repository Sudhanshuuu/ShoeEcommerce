import React from "react";
import styles from "./Feature.module.css";
import Img from "./shoe.gif";

function Feature(){
    return(
        <div className={styles["gif"]}>
<div className={styles["overlay"]}>
    <div className={styles["overlay-content"]}>
        <div className={styles["overlay-head"]}>Gazelle</div>
        <div className={styles["overlay-price"]}>Price - 3000/-</div>
    </div>
</div>


<div className={styles["images"]}>
    <img src={Img}alt="gif" />
    <div className={styles["collage"]}>
        <img src="https://i.pinimg.com/564x/fc/54/2d/fc542d8c35db58c34dc3f65249f89b60.jpg" alt="shoe"/>
        <img src="https://i.pinimg.com/564x/dd/bf/ac/ddbfac4ba3af66ca45832363435d976f.jpg" alt="shoe"  />
        <img src="https://i.pinimg.com/736x/ad/f4/be/adf4be760a568b381c576df3cd9c1c41.jpg" alt="shoe"  />
        <img src="https://i.pinimg.com/564x/f9/af/68/f9af686575b194a7d0aa6dc772cfe58c.jpg" alt="shoe"/>
    </div>
</div>

</div>
    )
}

export default Feature;
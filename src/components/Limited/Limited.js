import React from "react";
import styles from "./Limited.module.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/splide/css/sea-green';




function Limited(){
    return (<Splide className={styles["featured"]}>
                <SplideSlide className={styles["featured-img"]}>
                    <img src="https://i.pinimg.com/564x/08/95/dd/0895dd5eed09a1e8686ec9198fa6b085.jpg"
                        alt="shoe-poster" className={styles["poster"]}/>
                    <img src="https://m.media-amazon.com/images/I/71hj77-7YtL._UL1500_.jpg" alt="shoe"/>
                </SplideSlide>
    
    
                <SplideSlide className={styles["featured-img"]}>
                    <img src="https://i.pinimg.com/564x/10/ef/e5/10efe5d4184f9b5ade97c9d7ceab6a04.jpg"
                        alt="shoe-poster" className={styles["poster"]} />
                    <img src="https://img.stadiumgoods.com/nike-sb-dunk-low-qs-special-box-travis-scott_15237343_43112550_2048.jpg" alt="shoe" />
                </SplideSlide>
    
                <SplideSlide className={styles["featured-img"]}>
                    <img src="https://i.pinimg.com/564x/7e/20/4d/7e204d73c779152ee583ec04b2dacd84.jpg"
                        alt="shoe-poster" className={styles["poster"]} />
                    <img src="https://img.stadiumgoods.com/jordan-air-jordan-1-retro-high-og-chicago_13157697_42937135_2048.jpg" alt="shoe" />
                </SplideSlide>
    
                <SplideSlide className={styles["featured-img"]}>
                    <img src="https://i.pinimg.com/564x/2a/e5/b4/2ae5b449e53ca54747ce8c47a557a664.jpg"
                        alt="shoe-poster" className={styles["poster"]} />
                    <img src="https://img.stadiumgoods.com/nike-nike-dunk-low-sb-parra-abstract-art_17058032_43049094_2048.jpg" alt="shoe" />
                </SplideSlide>
    
    
   
    
    </Splide>)
}

export default Limited;
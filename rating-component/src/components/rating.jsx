import React, { useEffect, useRef, useState } from "react";
import star from "../images/icon-star.svg";
import * as styles from "../styles/Rating.module.scss";

import ThankYou from "./thankyou";

const Rating = () => {
    const [value, setValue] = useState(0);
    const [active, isActive] = useState({});
    const [show, setShow] = useState(true);

    const card = useRef(0);

    const handleStar = (e) => {
        setValue(e.target.innerText);
        isActive({ activeIndex: e.target.innerText });
    }

    const handleComponent = (e) => {
        card.current.classList.toggle('hide')
        setShow(!show);
    }

    const stars = [1, 2, 3, 4, 5];

    return (
        <>
            <div className={`${styles.rating} ${show ? null : styles.hide}`} ref={card}>
                <div className={styles.starImage}>
                    <img src={star} alt="image of star" />
                </div>
                <span className={styles.header}> How did we go? </span>
                <p className={styles.desc}>
                    Please let us now how we did with your support request.
                    All feedback is appreciated to help us
                    improve our offering!
                </p>

                <div className={styles.ratingStars}>
                    {stars.map(star => (
                        <div key={star} className={`${styles.starRating} ${(star == active.activeIndex) ? styles.active : null}`} onClick={handleStar} >
                            {star}
                        </div>
                    ))}
                </div>

                <div className={styles.button} onClick={handleComponent}>
                    <span> Submit </span>
                </div>

            </div>

            {show ? null : <ThankYou rate={value} /> }
        </>
    );
}

export default Rating;
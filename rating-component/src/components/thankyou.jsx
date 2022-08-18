import * as styles from '../styles/ThankYou.module.scss';
import img from '../images/illustration-thank-you.svg';

const ThankYou = (props) => {
    return (
        <div className={styles.thankYou}>
            <img src={img} alt="" />
            <span className={styles.select}>You selected {props.rate} out of 5 </span>
            <span className={styles.header}>Thank you!</span>
            <p className={styles.desc}>
                We appreciate you taking the time to give a rate. If you ever need more support, don't hestitate to get in touch.
            </p>
        </div>
    );
}

export default ThankYou
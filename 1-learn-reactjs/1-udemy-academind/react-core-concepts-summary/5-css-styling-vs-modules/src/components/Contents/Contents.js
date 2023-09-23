import styles from './Content.module.css'

const Content = (props) => {

    return (
        /* css modules */
        <div className={styles.Content}>
            <p className={styles.name}>My name is {props.name}</p>
            <p className={styles.job}>I'am {props.job}</p>
            <br></br>
        </div>
    );
};

export default Content;
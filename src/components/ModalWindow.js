import styles from './ModalWindow.module.css';
import Button from './UI/Button';

const ModalWindow = (props) => {
    return (
        <div className={styles['background']}>
            <div
                className={styles['modal']}
                onClick={() => {
                    props.setModalWindow(true);
                }}
            >
                <h2>{props.title}</h2>
                <p>{props.message}</p>
                <Button>Close</Button>
            </div>
        </div>
    );
};

export default ModalWindow;

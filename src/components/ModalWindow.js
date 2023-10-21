import styles from './ModalWindow.module.css';

const ModalWindow = (props) => {
    return (
        <div className={styles['background']}>
            <div
                className={styles['modal']}
                onClick={() => {
                    props.setModalWindow(true);
                }}
            >
                <h2>Data entered incorrectly</h2>
            </div>
        </div>
    );
};

export default ModalWindow;

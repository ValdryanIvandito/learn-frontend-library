import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';

// props -> destructuring
function Modal({ children }) {
    const navigate = useNavigate();

    const closeHandler = () => {
        navigate('..'); // .. it's mean go to parent path
    }

    return (
        <>
            <div className={classes.backdrop} onClick={closeHandler}/>
            <dialog open={true} className={classes.modal}>
                {children}
            </dialog>
        </>
    )
}

export default Modal;
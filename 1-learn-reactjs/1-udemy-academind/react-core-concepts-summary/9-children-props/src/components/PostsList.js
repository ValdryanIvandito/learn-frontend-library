import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

const PostsList = () => {
    const [ enteredBody, setEnteredBody ] = useState('');
    const [ enteredAuthor, setEnteredAuthor ] = useState('');

    const bodyChangeHandler = (event) => {
        setEnteredBody(event.target.value);
    }

    const authorChangeHandler = (event) => {
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
            <Modal>
                <NewPost 
                    onBodyChange={bodyChangeHandler} 
                    onAuthorChange={authorChangeHandler}
                />
            </Modal>
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                {/* <Post author="Sofian" body="Let's build some dApps!" /> */}
            </ul>
        </>
    );
}

export default PostsList;
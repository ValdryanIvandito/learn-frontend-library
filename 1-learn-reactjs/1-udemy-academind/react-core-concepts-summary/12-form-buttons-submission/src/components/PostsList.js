// import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

const PostsList = ({ isPosting, onStopPosting }) => {
    return (
        <>
            {isPosting ? <Modal onClose={onStopPosting}>
                <NewPost 
                    onCancel={onStopPosting}
                />
            </Modal> : false}
            
            <ul className={classes.posts}>
                <Post author="Sofian" body="Let's build some dApps!" />
            </ul>
        </>
    );
}

export default PostsList;
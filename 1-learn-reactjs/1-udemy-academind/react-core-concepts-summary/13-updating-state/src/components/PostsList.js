import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

const PostsList = ({ isPosting, onStopPosting }) => {
    const [posts, setPosts] = useState([]);

    const addPostHandler = (postData) => {
        // This code is not good enough, therefore this code is updated to the code below
        // setPosts([postData, ...postData]); 

        setPosts((existingPosts) => {
            // It uses the spread operator (...) to create a new array containing the new 'postData'
            const updatedPosts = [postData, ...existingPosts]; 
            console.log(updatedPosts[0]);
            return updatedPosts;
        });
    }

    return (
        <>
            {isPosting ? <Modal onClose={onStopPosting}>
                <NewPost 
                    onCancel={onStopPosting}
                    onAddPost={addPostHandler}
                />
            </Modal> : false}
            
            <ul className={classes.posts}>
                <Post author="Sofian" body="Let's build some dApps!" />
            </ul>
        </>
    );
}

export default PostsList;
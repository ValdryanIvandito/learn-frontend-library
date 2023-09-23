import { useState, useEffect } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

const PostsList = ({ isPosting, onStopPosting }) => {
    // don't do this, because it's gona looping forever / infinite loop, we should use useEffect
    // fetch('http://localhost:8080/posts').then(response => response.json().then(data => {
    //     setPosts(data.posts);
    // }));
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts');
            const resData = await response.json();
            setPosts(resData.posts);
            setIsFetching(false);
        }

        fetchPosts();
    }, []);

    const addPostHandler = (postData) => {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {/* conditional content-1 */}
            {
                isPosting ? 
                    <Modal onClose={onStopPosting}>
                        <NewPost 
                            onCancel={onStopPosting}
                            onAddPost={addPostHandler}
                        />
                    </Modal> 
                : 
                    false
            }
            
            {/* conditional content-2 */}
            {!isFetching && posts.length > 0 && (
                <ul className={classes.posts}>
                    {/* outputing list data */}
                    {posts.map((post) => (
                        <Post key={post.body} author={post.author} body={post.body} />
                    ))}
                </ul> 
            )}

            {/* conditional content-3 */}
            {!isFetching && posts.length === 0 && (
                <div style={{ textAlign: 'center' }}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}

            {/* conditional content-4 */}
            {isFetching && (
                <div style={{ textAlign: 'center' }}>
                    <p>Loading posts...</p>
                </div>
            )}
        </>
    );
}

export default PostsList;
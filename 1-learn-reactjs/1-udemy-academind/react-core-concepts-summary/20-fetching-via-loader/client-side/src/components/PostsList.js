import { useLoaderData } from 'react-router-dom';
import Post from './Post';
import classes from './PostsList.module.css';

const PostsList = () => {
    const posts = useLoaderData();

    return (
        <>        
            {/* conditional content-1 */}
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {/* outputing list data */}
                    {posts.map((post) => (
                        <Post key={post.body} author={post.author} body={post.body} />
                    ))}
                </ul> 
            )}

            {/* conditional content-2 */}
            {posts.length === 0 && (
                <div style={{ textAlign: 'center' }}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    );
}

export default PostsList;
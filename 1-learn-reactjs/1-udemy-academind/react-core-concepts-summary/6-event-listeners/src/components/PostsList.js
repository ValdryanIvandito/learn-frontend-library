import Post from './Post';
import NewPost from './NewPost';
import classes from './PostsList.module.css';

const PostsList = () => {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author="Valdryan" body="Cardano is awesome!" />
                <Post author="Sofian" body="Let's build some dApps!" />
            </ul>
        </>
    );
}

export default PostsList;
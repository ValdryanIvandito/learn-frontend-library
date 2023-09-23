import classes from './NewPost.module.css';

function NewPost() {
  const changeBodyHandler = (event) => {
    console.log(event.target.value);
  }

  const changeNameHandler = (event) => {
    console.log(event.target.value);
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Your Comment</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required onChange={changeNameHandler}/>
      </p>
    </form>
  );
}

export default NewPost;
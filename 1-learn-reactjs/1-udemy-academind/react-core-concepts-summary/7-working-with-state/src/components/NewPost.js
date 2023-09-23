import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost() {
  const [ enteredBody, setEnteredBody ] = useState('');
  const [ enteredName, setEnteredName ] = useState('');

  const changeBodyHandler = (event) => {
    setEnteredBody(event.target.value);
  }

  const changeNameHandler = (event) => {
    setEnteredName(event.target.value);
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

      <br></br>

      <p style={{color: 'white'}}>Entered Body Value: {enteredBody}</p>
      <p style={{color: 'white'}}>Entered Name Value: {enteredName}</p>
    </form>
  );
}

export default NewPost;
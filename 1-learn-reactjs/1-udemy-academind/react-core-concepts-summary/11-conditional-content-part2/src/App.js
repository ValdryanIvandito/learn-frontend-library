import { useState } from 'react';
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

function App() {
  const [ modalIsVisible, setModalIsVisible ] = useState(false);

  const showModalHandler = () => {
    setModalIsVisible(true);
  }

  const hideModalHandler = () => {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader createPost={showModalHandler}/>
      <main>
        <PostsList 
          isPosting={modalIsVisible} 
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
};

export default App;
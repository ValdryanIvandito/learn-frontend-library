import Title from './components/Title/Title';
import Contents from './components/Contents/Contents';

import './App.css';

const identity = [
  {
      name: 'Valdryan Ivandito',
      job: 'Web Developer'
  },
  {   name: 'Sofian Fadli',
      job: 'Python Developer'
  },
  {   name: 'Ruben Stefanus',
      job: 'AI Engineer'
  }, 
  {   name: 'Joseph Sanjaya',
      job: 'Mobile Developer'
  } 
];

function App() {
  return (
    <div>
      <Title />
      <Contents name={identity[0].name} job={identity[0].job} />
      <Contents name={identity[1].name} job={identity[1].job} />
      <Contents name={identity[2].name} job={identity[2].job} />
      <Contents name={identity[3].name} job={identity[3].job} />
    </div>
  );
};

export default App;
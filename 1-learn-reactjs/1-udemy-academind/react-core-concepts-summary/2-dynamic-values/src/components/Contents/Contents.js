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

const Content = () => {
    const chosenIndex = Math.floor(Math.random() * 4); 
    const chosenName = identity[chosenIndex].name;
    const chosenJob = identity[chosenIndex].job;

    return (
        <div>
            <p>My name is {chosenName}</p>
            <p>I'am {chosenJob}</p>
        </div>
    );
};

export default Content;
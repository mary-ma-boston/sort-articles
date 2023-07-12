import React, {useEffect, useState} from 'react';
import ArticlesLists from './components/ArticlesLists';
import './App.css';

const data = [
  {
    id: 1,
    title: 'A message to our customers',
    upvotes: 12,
    date: '2020-01-24',
  },
  {
    id: 2,
    title: 'Alphabet earnings',
    upvotes: 22,
    date: '2019-11-23',
  },
  {
    id: 3,
    title: 'Artificial Mountains',
    upvotes: 2,
    date: '2019-11-22',
  },
  {
    id: 4,
    title: 'Scaling to 100k Users',
    upvotes: 72,
    date: '2022-01-21',
  },
  {
    id: 5,
    title: 'the Emu War',
    upvotes: 24,
    date: '2019-10-21',
  },
  {
    id: 6,
    title: 'What is SAP',
    upvotes: 1,
    date: '2023-01-21',
  },
  {
    id: 7,
    title: 'Simple text editor has 15k monthly users',
    upvotes: 7,
    date: '2010-12-31',
  },
];


function App() {

  const [userArticles, setUserArticles] = useState(data);

  useEffect(()=>{
    const newArtciles = [...data];
    let sortedArticles = newArtciles.sort((p1, p2)=> p2.upvotes - p1.upvotes);
    setUserArticles(sortedArticles);
  },[]);


  const upvotesHandler = () => {
    const newArtciles = [...userArticles];
    
    // let sortedArticles = newArtciles.sort((p1, p2)=> p1.upvotes < p2.upvotes ? 1 : (p1.upvotes >p2.upvotes)? -1:0);
    let sortedArticles = newArtciles.sort((p1, p2)=> p2.upvotes - p1.upvotes);
    setUserArticles(sortedArticles);
  };

  const sortByDateHandler = () => {
    const newArtciles = [...userArticles];

    let sortedDateArticles = newArtciles.sort((a,b)=> new Date(b.date) - new Date(a.date));
    setUserArticles(sortedDateArticles);
  };

  

  return (
    <div className='container'>
      <h1>Sorting Articles</h1>
      <div className='header'>
        <span>Sort By</span>
        <button onClick={upvotesHandler}>Most Upvoted</button>
        <button onClick={sortByDateHandler}>Most Recent</button>
      </div>
      <ArticlesLists articles={userArticles}/>
    </div>
  );
}

export default App;

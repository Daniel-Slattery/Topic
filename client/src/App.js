import './App.css';
import React, {useState, useEffect} from 'react';
import TopicList from './components/TopicList/TopicList';

function App() {

  const [loading, setLoading] = useState(true);
  const [topics, setTopics] = useState([]);

    // Load up topics from localhost
  useEffect(() => {
    async function fetchData() {
      const url = "http://localhost:3001/topics";
      const response = await fetch(url)
      const data = await response.json()
      setTopics(data);
      setLoading(false);
    }
    fetchData();
  }, [])


  return (
    <div className="container">
      <TopicList  topics={topics}/>
    </div>
  );
}

export default App;

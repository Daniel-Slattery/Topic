import './App.css';
import React, {useState, useEffect} from 'react';
import TopicList from './components/TopicList/TopicList';
import InputForm from './components/InputForm/InputForm';
import {addTopic, getTopics, voteTopic, deleteTopicService} from './Services/ApiService'

function App() {

  const [topics, setTopics] = useState([]);

  async function fetchTopics() {
    const result = await getTopics()
    const topicList = result.sort((a,b) => b.score - a.score);
    setTopics(topicList);
  }

  const createTopic = async (topic) => {
    const newTopic = await addTopic(topic);
    setTopics((prevTopic) => [...prevTopic, newTopic]);
  }

  const voteTopics = async (id, direction) => {
    const res = await voteTopic(id, direction);
    setTopics(prevTopics => {
      return prevTopics.map(topic => {
        if (topic._id === id) {
          return res;
        }
        return topic;
      })
    });
  }

  const deleteTopic = async function (topic) {
    const topicList = await deleteTopicService(topic._id);
    setTopics(prev =>  prev.filter(topics => topics !==  topic))
  }

    // Load up topics from localhost
  useEffect(() => {
    fetchTopics();
  }, [topics])

  return (
    <div className="container">
      <InputForm createTopic={createTopic} />
      <TopicList  topics={topics} voteTopics={voteTopics} deleteTopic={deleteTopic} />
    </div>
  );
}

export default App;

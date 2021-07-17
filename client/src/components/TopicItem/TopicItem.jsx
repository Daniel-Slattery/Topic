import React from 'react'
// import { voteTopic, deleteTopic } from '../../Services/ApiService';
import './TopicItem.css';

const TopicItem = ({topic , voteTopics, deleteTopic}) => {
  return (
    <div className='TopicItem'>
      <div className="score">
        <button className="up-vote" onClick={() => {voteTopics(topic._id, 'up')}}>👍</button>
        <div className="score-number">{topic.score}</div>
        <button className="down-vote" onClick={() => {voteTopics(topic._id, 'down')}}>👎</button>
      </div>
      <div className="topic-title">
        <p>{topic.title}</p>
      </div>
      <button className="delete-icon" onClick={() => {deleteTopic(topic)}}>
        🗑️
      </button>

    </div>
  )
}

export default TopicItem

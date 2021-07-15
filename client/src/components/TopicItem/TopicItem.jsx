import React from 'react'
import './TopicItem.css';

const TopicItem = ({topic}) => {
  return (
    <div className='TopicItem'>
      <div className="score">
        <div className="up-vote">👍</div>
        <div className="score-number">{topic.score}</div>
        <div className="down-vote">👎</div>
      </div>
      <div className="topic-title">
        <p>{topic.title}</p>
      </div>
      <div className="delete-icon">
        🗑️
      </div>

    </div>
  )
}

export default TopicItem

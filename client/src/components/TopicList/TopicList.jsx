import React from 'react'
import TopicItem from '../TopicItem/TopicItem'

const TopicList = ({topics, voteTopics, deleteTopic}) => {
  return (
    <div className='TopicList'>
      {topics.map((topic) => (
        <TopicItem topic={topic} voteTopics={voteTopics} deleteTopic={deleteTopic} />
      ))}
    </div>
  )
}

export default TopicList

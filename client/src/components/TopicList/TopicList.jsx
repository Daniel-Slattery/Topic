import React from 'react'
import TopicItem from '../TopicItem/TopicItem'

const TopicList = ({topics}) => {
  return (
    <div className='TopicList'>
      {topics.map((topic) => (
        <TopicItem topic={topic} />
      ))}
    </div>
  )
}

export default TopicList

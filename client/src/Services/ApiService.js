const baseURL = "http://localhost:3001/topics"

// Load up topics from localhost
const getTopics = async () => {
  const response = await fetch(baseURL)
  return await response.json()
}

const voteTopic = async (id, direction) => {
  const response = await fetch(`${baseURL}/${id}/${direction}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    }
  });
  return await response.json()
}

const deleteTopicService = async (id) => {
  await fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
    }
  });
}

const addTopic = async (topic) => {
  const response = await fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(topic),
    headers: {
      "Content-Type": "application/json",
    }
  });
  return await response.json();
}

module.exports = {
  getTopics,
  voteTopic,
  deleteTopicService,
  addTopic
}
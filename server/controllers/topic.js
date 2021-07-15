const topic = require('../models/topic.js');

exports.getAll = async (req, res) => {
  try {
    const topics = await topic.find();
    res.send(topics)
  } catch (e) {
    res.status = 500;
  }
};

exports.addTopic = async (req, res) => {
  try {
    const newTopic = await topic.create(req.body)
    res.send(newTopic);
    res.status = 200;
  } catch (e) {
    res.status = 500;
  }
};
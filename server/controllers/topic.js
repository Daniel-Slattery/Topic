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

exports.deleteTopic = async (req, res) => {
  const { id } = req.params;
  try {
    await topic.findByIdAndRemove(id);
    res.status(204).end();
  } catch (e) {
    res.status = 500;
  }
};

exports.voteUp = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTopic = await topic.findByIdAndUpdate(
      { _id: id },
      { $inc: {score: 1} }
    )
    res.status(201).send(updatedTopic);
  } catch (e) {
    res.status = 500;
  }
};

exports.voteDown = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTopic = await topic.findByIdAndUpdate(
      { _id: id },
      { $inc: {score: -1} }
    )
    res.status(201).send(updatedTopic);
  } catch (e) {
    res.status = 500;
  }
};
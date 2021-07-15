const router = require('express').Router();
const ctrl = require('./controllers/topic')

// router.get('/topics', (req, res) => res.send('hello daniel2'));

router.get('/topics', ctrl.getAll);
router.post('/topics', ctrl.addTopic);
// router.delete('/topics/:id', topics.deleteTopic);
// router.put('/topics:/id/up', topics.updateTopic);
// router.put('/topics:/id/down', topics.updateTopic);

module.exports = router;
const router = require('express').Router();
const ctrl = require('./controllers/topic')

// router.get('/topics', (req, res) => res.send('hello daniel2'));

router.get('/topics', ctrl.getAll);
router.post('/topics', ctrl.addTopic);
router.delete('/topics/:id', ctrl.deleteTopic);
router.put('/topics/:id/up', ctrl.voteUp);
router.put('/topics/:id/down', ctrl.voteDown);

module.exports = router;
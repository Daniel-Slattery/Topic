const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/topic_app_db`, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;
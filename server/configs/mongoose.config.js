const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/gebuddy_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log('Established a connection to database'))
    .catch(err => console.log('error:' + err))
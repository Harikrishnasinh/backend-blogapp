const bodyParser = require('body-parser');

const exp = require('express'),
mongoose = require('mongoose'),
morgan = require('morgan'),
serv = exp(),
blogRoutes = require('./router/blog'),
userRoutes = require('./router/user'),
cors = require('cors'),
url = "mongodb+srv://mern-blog-app:mern-blog-app@cluster0.laljzx6.mongodb.net/"
serv.use(cors())
serv.use(bodyParser.json())

mongoose.connect(url).then(r => console.log('connected')).catch(e => console.log(e))
serv.use(morgan('default'));   
   
serv.use('/blogs', blogRoutes.router)
serv.use('/users', userRoutes.router)
serv.listen(4000);

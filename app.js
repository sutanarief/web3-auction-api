require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const { connect } = require('./config/db.js')
const cors = require('cors')
const PORT = 3000
const router = require('./router')

const app = express()
const bodyParser = require('body-parser');
const crypto = require('crypto');
const { execSync } = require('child_process');

app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))

app.post('/git', (req, res) => {
  const hmac = crypto.createHmac('sha1', process.env.SECRET);
  const sig  = 'sha1=' + hmac.update(JSON.stringify(req.body)).digest('hex');
  if (req.headers['x-github-event'] === 'push' &&
    crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(req.headers['x-hub-signature']))) {
    res.sendStatus(200);
    const commands = ['git fetch origin master',
                      'git reset --hard origin/master',
                      'git pull origin master --force',
                      'npm install',
                      // your build commands here
                      'refresh']; // fixes glitch ui
    for (const cmd of commands) {
      console.log(execSync(cmd).toString());
    }
    console.log('updated with origin/master!');
    return;
  } else {
    console.log('webhook signature incorrect!');
    return res.sendStatus(403);
  }
});

app.use('/api', router)
//yuhuuuu

connect()
.then(() => {
  console.log('connected to MongoDB')
  app.listen(3000, ()=> {
      console.log(`Node API app is running on port 3000`)
  });
}).catch((error) => {
  console.log(error)
})

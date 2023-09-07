const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('cicd server running...'))
app.listen(3000, () => console.log('cicd server runs on port 3000'))
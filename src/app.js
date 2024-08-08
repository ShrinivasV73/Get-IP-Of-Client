const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const requestIp = require('request-ip');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.use(requestIp.mw());

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.post('/api/submit', (req, res) => {
	const clientIp = req.clientIp;
	const { name, email } = req.body;

	console.log(`Received form submission from IP: ${clientIp}`);
	console.log(`Name: ${name}, Email: ${email}`);

	res.json({ ip: clientIp });
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;

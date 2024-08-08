const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5500;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

// Serve the index.html file on the root route
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.post('/submit', (req, res) => {
	const clientIp =
		req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	const { name, email } = req.body;

	console.log(`Received form submission from IP: ${clientIp}`);
	console.log(`Name: ${name}, Email: ${email}`);

	// Here you can save the data to a database if needed

	res.json({ ip: clientIp });
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

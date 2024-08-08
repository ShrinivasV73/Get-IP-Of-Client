const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const requestIp = require('request-ip');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true })); // For form-urlencoded data
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.use(requestIp.mw());

// Serve static files and the HTML form
// app.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// Handle form submission
app.post('/submit', (req, res) => {
	const clientIp = req.clientIp;
	const { name: userName, email: userEmail } = req.body;

	console.log(`Received form submission from IP: ${clientIp}`);
	console.log(`Name: ${userName}, Email: ${userEmail}`);

	// Send response back to the client
	res.json({
		success: true,
		message: `Received form submission from IP: ${clientIp}`
	});
});

// Start server
// Export the app as a serverless function
module.exports = (req, res) => {
	app(req, res);
};

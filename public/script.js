document
	.getElementById('ipForm')
	.addEventListener('submit', async function (event) {
		event.preventDefault(); // Prevent default form submission

		const formData = new FormData(this);

		// Convert FormData to JSON object
		const data = {};
		formData.forEach((value, key) => {
			data[key] = value;
		});

		const response = await fetch('/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		const result = await response.json();

		// Display an alert with the message from the server
		alert(result.message);
	});

document
	.getElementById('ipForm')
	.addEventListener('submit', async function (event) {
		event.preventDefault();

		const formData = {
			name: document.getElementById('name').value,
			email: document.getElementById('email').value
		};

		try {
			const response = await fetch('http://localhost:3000/api/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			const result = await response.json();
			console.log(result);
			alert(
				'Form submitted successfully. Your IP address is ' + result.ip
			);
		} catch (error) {
			console.error(error);
			alert('Failed to submit the form');
		}
	});

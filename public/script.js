window.addEventListener('DOMContentLoaded', () => {
    // Fetch previous content of JSON file
    fetch('/api/Global/restaurant_info')
        .then(response => response.json())
        .then(data => {
            // Populate the text area with previous content
            document.getElementById('editedData').value = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('An error occurred while fetching the data.');
        });
    
    // Add event listener to the form submit button
    document.getElementById('editForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const editedData = document.getElementById('editedData').value;
        const filename = 'restaurant_info.json'; // Specify the filename here
        const submitButton = document.getElementById('submitButton');
        const loadingIndicator = document.getElementById('loadingIndicator');
        
        // Show loading indicator
        loadingIndicator.classList.remove('hidden');
        submitButton.setAttribute('disabled', true);

        // Send edited data to server using AJAX
        fetch('/api/Global/restaurant_info/edit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ filename, editedData })
        })
        .then(response => response.json())
        .then(data => {
            // Hide loading indicator
            loadingIndicator.classList.add('hidden');
            submitButton.removeAttribute('disabled');
            alert(data.message);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while submitting the data.');
            // Hide loading indicator
            loadingIndicator.classList.add('hidden');
            submitButton.removeAttribute('disabled');
        });
    });
});

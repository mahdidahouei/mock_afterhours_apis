window.addEventListener('DOMContentLoaded', () => {
    const routeName = window.location.pathname.split('/')[2];
    const mockName = window.location.pathname.split('/')[3];

    // Initialize JSON Editor
    const container = document.getElementById('jsoneditor');
    const options = {
        modes: ['tree', 'text'], // Display modes: tree view and text view
        onError: function (err) {
            alert('Syntax Error: ' + err.toString());
        }
    };
    const editor = new JSONEditor(container, options);

    // Fetch previous content of JSON file
    fetch(`/api/${routeName}/${mockName}`)
        .then(response => response.json())
        .then(data => {
            // Set JSON data in the editor
            editor.set(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('An error occurred while fetching the data.');
        });

    // Add event listener to the form submit button
    document.getElementById('submitButton').addEventListener('click', function() {
        const editedData = editor.get(); // Get edited data from the editor
        const filename = `${mockName}.json`; // Specify the filename here
        const submitButton = document.getElementById('submitButton');
        const loadingIndicator = document.getElementById('loadingIndicator');

        // Show loading indicator
        loadingIndicator.classList.remove('hidden');
        submitButton.setAttribute('disabled', true);

        // Send edited data to server using AJAX
        fetch(`/api/${routeName}/${mockName}/edit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ filename, editedData: JSON.stringify(editedData) })
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

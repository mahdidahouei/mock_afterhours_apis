// Define the list of APIs
const globalApis = [
    { name: 'Search Restaurant', path: '/api/Global/search_restaurant' },
    { name: 'Restaurant Info', path: '/api/Global/restaurant_info' },
    { name: 'Search Ranking', path: '/api/Global/search_ranking' },
    { name: 'Ranking Info', path: '/api/Global/ranking_info' }
];

const memberApis = [
    { name: 'Available Votes', path: '/api/Member/available_votes' },
    { name: 'Been To Restaurant Before', path: '/api/Member/been_to_restaurant' }
];

// Function to create list tiles for APIs
function createApiListTile(api, category) {
    const li = document.createElement('li');
    li.classList.add('list-tile');
    
    // Add class based on category
    li.classList.add(`${category}-list-tile`);

    const title = document.createElement('div');
    title.classList.add('list-tile-title');
    title.textContent = api.name;

    const subtitle = document.createElement('div');
    subtitle.classList.add('list-tile-subtitle');
    subtitle.textContent = api.path;

    li.appendChild(title);
    li.appendChild(subtitle);

    li.addEventListener('click', () => {
        window.location.href = `${api.path}/edit`;
    });

    return li;
}

// Function to populate the API list
function populateApiList(apiList, apis, category) {
    apis.forEach(api => {
        const listItem = createApiListTile(api, category);
        apiList.appendChild(listItem);
    });
}

// Function to send API request
function sendApiRequest(path) {
    fetch(path)
        .then(response => response.json())
        .then(data => {
            console.log('Response:', data);
            // Handle response as needed
            alert(JSON.stringify(data, null, 2));
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while fetching data.');
        });
}

// Populate the Global API list
const globalApiList = document.getElementById('globalApiList');
populateApiList(globalApiList, globalApis, 'global');

// Populate the Member API list
const memberApiList = document.getElementById('memberApiList');
populateApiList(memberApiList, memberApis, 'member');

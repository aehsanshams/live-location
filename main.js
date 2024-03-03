document.addEventListener('DOMContentLoaded', function () {

    // Get Data button click event
    document.getElementById('getDataBtn').addEventListener('click', getUserData);

    function getUserData() {
        // Get user's IP from local storage
        const userIP = localStorage.getItem('userIP');

        // Use the IP to get additional data
        fetch(`https://ipinfo.io/${userIP}/geo`)
            .then(response => response.json())
            .then(data => {
                // Display user information on the page
                const userInfo = `
                    Latitude: ${data.lat}<br>
                    Longitude: ${data.lon}<br>
                    City: ${data.city}<br>
                    Region: ${data.region}<br>
                    Time Zone: ${data.timezone}<br>
                `;
                document.getElementById('user-info').innerHTML += userInfo;

                // Show user's location on Google Maps
                showUserLocation(data.lat, data.lon);

                // Get the current time in the user's time zone
                const currentTime = new Date().toLocaleString('en-US', { timeZone: data.timezone });
                console.log('Current Time:', currentTime);
            })
            .catch(error => console.error('Error fetching user data:', error));
    }

    function showUserLocation(latitude, longitude) {

        const mapDiv = document.getElementById('map');
        mapDiv.innerHTML = `<p>Map will be displayed here</p>`;

    }
});

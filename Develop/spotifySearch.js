const playlistArea = document.getElementById("musicDisplay");

const refresh_token = "AQCfDB3bTof-_EkswipRocqlcHa_560oI24tOC9brWemEHwrIXhih8Ep5Y1edQ8I8FYKWd_D3GjYGcJ__evxItB_C8xyb53yN70jMtFQ-9jGZqMfGfHeMXGfjaoSC6IxnbQ";

const base64Auth = "OGJkN2M1NzM2OTZkNDJkNTk5ZjNlZWMxMDM5MDRkY2M6MDU4NzQ3NjlmODI4NDRiM2IwZmRjYjZiNDg0NDExYjc";

const clientID = "8bd7c573696d42d599f3eec103904dcc";


if (localStorage.getItem("access_token") == null || localStorage.getItem("token_date") < (Math.floor(Date.now() / 1000) - 3600)) {
    console.log("Access token expired or does not exist. Getting a new access token");
    getAccessToken();
} else {
    console.log("Using access token: " + localStorage.getItem("access_token"));
}

// Get a new token for the session
function getAccessToken() {
    localStorage.setItem("token_date", Math.floor(Date.now() / 1000))
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic " + base64Auth);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("refresh_token", refresh_token);
    urlencoded.append("grant_type", "refresh_token");
    urlencoded.append("client_id", clientID);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    fetch("https://accounts.spotify.com/api/token", requestOptions)
        .then(response => response.text())
        .then(result => saveToken(result))
        .catch(error => console.log('error', error));

}
function saveToken(result) {
    const accessToken = JSON.parse(result).access_token;
    localStorage.setItem("access_token", accessToken);

}
// define form elements as variables
const submitBtn = document.getElementById("submitBtn");
const genreSelection = document.querySelectorAll('input[name="genre"]');
const tempoSelection = document.querySelectorAll('input[name="tempo"]');


// fetch the user options when they click the submit button
function getRecommendations(selectedGenre, selectedTempo) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem("access_token"));

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    fetch(`https://api.spotify.com/v1/recommendations?seed_artists=${selectedGenre}&target_danceability=${selectedTempo}&limit=5`, requestOptions)
        .then(response => response.text())
        .then(result => displayResults(result))
        .catch(error => console.log('error', error));
    //

}


// spotify oEmbed frame method
function displayResults(result) {
    var resultsObj = JSON.parse(result);
    console.log(resultsObj);
    console.log(resultsObj.tracks.length);
    for (i = 0; i < resultsObj.tracks.length; i++) {
        let spotifyID = resultsObj.tracks[i].id
        var songItem = `<iframe src="https://open.spotify.com/embed/track/` + spotifyID + `?utm_source=oembed" frameBorder="0" width="100%" height="100px" allow="encrypted-media"></iframe><br />`
        playlistArea.insertAdjacentHTML("beforeend", songItem);
    }
}
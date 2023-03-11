const playlistArea = document.getElementById("music");

const API_KEY = "BQCI61HWq29fWn-ldXnKxqqqDVwXEXo1y3M2_97Rmd5z9Aoy_A2ju3dH0b7EbEMcdZ26rWPFaPYvrjn79UYb0AiaEO6nVfjss9xcZfDPjKvZqoa4qv5ZKr_F_eD3P5ewM4z_HBfAU4KLFodXDu0k2WrdA3lmnFWfS72ww5tTl7rCUt7Pcwo4zFadkojZzS6ziRPHgglbsbXCJxCGZpHF40BYP-g3PmDTe-ESZu0VQElSeA";

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + API_KEY);

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

                     

// define form elements as variables
const submitBtn = document.getElementById("submitBtn");
const genreSelection = document.querySelectorAll('input[name="genre"]');
const tempoSelection = document.querySelectorAll('input[name="tempo"]');

// when user clicks submit button, get the values of their options
submitBtn.addEventListener("click", () => {
    let selectedGenre;
    console.log("button clicked")
    for (const radioButton of genreSelection) {
        if (radioButton.checked) {
            selectedGenre = radioButton.value;
            console.log(selectedGenre);
        }
    }
    for (const radioButton of tempoSelection) {
        if (radioButton.checked) {
            selectedTempo = radioButton.value;
            console.log(selectedTempo);
        }
    }
    getRecommendations(selectedGenre, selectedTempo);
    
})


// fetch the user options when they click the submit button
function getRecommendations(selectedGenre, selectedTempo) {
    fetch(`https://api.spotify.com/v1/recommendations?seed_genres=${selectedGenre}&target_danceability=${selectedTempo}&limit=5`, requestOptions)
        .then(response => response.text())
        .then(result => displayResults(result))
        .catch(error => console.log('error', error));
    //

}

// create a playlist on the page from api response
// browser media player method
// function displayResults(result) {
//     var resultsObj = JSON.parse(result);
//     console.log(resultsObj);
//     console.log(resultsObj.tracks.length);
//     for (i = 0; i < resultsObj.tracks.length; i++) {
//         let spotifyURL = resultsObj.tracks[i].external_urls.spotify
//         var songItem = `<figure><figcaption>
//         <a href="${spotifyURL}" target="_blank">${resultsObj.tracks[i].artists[0].name} - ${resultsObj.tracks[i].name}</a> <br /> 
//         <video controls poster="${resultsObj.tracks[i].album.images[1].url}"><source src="${resultsObj.tracks[i].preview_url}" type="audio/mpeg"/> </video>
//         </figcaption></figure>`
//         playlistArea.insertAdjacentHTML("beforeend", songItem);
//     }
// }

// spotify oEmbed frame method
function displayResults(result) {
    var resultsObj = JSON.parse(result);
    console.log(resultsObj);
    console.log(resultsObj.tracks.length);
    for (i = 0; i < resultsObj.tracks.length; i++) {
        let spotifyID = resultsObj.tracks[i].id
        var songItem = `<iframe src="https://open.spotify.com/embed/track/` + spotifyID + `?utm_source=oembed" frameBorder="0" width="300px" height="80px"></iframe><br />`
        playlistArea.insertAdjacentHTML("beforeend", songItem);
    }
}
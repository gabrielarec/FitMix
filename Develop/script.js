//base JavaScript file
var homePage = document.getElementById("home-page")
var musicQuiz = document.getElementById("music-quiz")
let selectedGenre;
let selectedTempo;
let selectedCategory;
//'create new workout' quiz start button
var createWorkout = document.getElementById("create-workout")
createWorkout.addEventListener('click', function () {
    //spotify event listener
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
    for (const radioButton of categorySelection) {
        if (radioButton.checked) {
            selectedCategory = radioButton.value;
            console.log(selectedCategory);
        }
    }
    // check if user has selected all 3 options
    if (selectedGenre == undefined || selectedTempo == undefined || selectedCategory === undefined) {
        console.log("error, quiz not finished")
        $('.ui.basic.modal')
            .modal('show');
    } else {
        // fetch playlist
        getRecommendations(selectedGenre, selectedTempo);
        // fetch workout 
        getWorkoutRec(selectedCategory).catch(error => {
            console.log('error');
            console.error(error)
        });
        //change the page 
        changePage("music-quiz", "quizResults")
    }



})
//function to change pages. Use parameters to select which elements to take in and then hide/show
//call each time you have an old page and new page, pass in the string of ids for each element
function changePage(elementToHide, elementToShow) {
    document.getElementById(elementToHide).classList.add("hidden")
    document.getElementById(elementToHide).classList.add("transition")
    document.getElementById(elementToShow).classList.remove("hidden")
    document.getElementById(elementToShow).classList.remove("transition")
}
// create new workout button event listener
var startButton = document.getElementById("first-button")
startButton.addEventListener('click', function () {
    changePage("home-page", "music-quiz")
})

function startWorkout(e) {
    e.preventDefault()
    console.log('click')
}


// set home page saved workouts div as variable
const savedWorkoutArea = document.getElementById("userSavedWorkouts")
//function to load from localstorage. Pull the array with objects, and display the one that is relevant to you
//append new workout to the page
function displayWorkoutFromLS() {
    var savedWorkouts = JSON.parse(localStorage.getItem("savedCollections"));
    if (savedWorkouts == null) {
        savedWorkoutArea.insertAdjacentHTML("beforeend", `<div class="ui segment">      <img class="ui centered medium image" style="border-radius:10px;" src="Develop/Images/fitmix.jpg"><h4>Welcome! Click "Create New Workout" to get started!</h4></div>`)

    } else {
        //pull from respective keys in LS for workout and playlist 
        savedWorkoutArea.insertAdjacentHTML("beforeend", `<h2>Saved Workouts</h2>`)
        for (var i = 0; i < savedWorkouts.length; i++) {
            savedWorkoutArea.insertAdjacentHTML("beforeend", `<div class="ui segment" onClick='getWorkoutRec("${savedWorkouts[i].workoutQuery}"); getRecommendations("${savedWorkouts[i].genreQuery}", "${savedWorkouts[i].tempoQuery}"); changePage("home-page", "quizResults");'><img class="ui top centered medium circular image" src="./Develop/Images/img9.jpeg"><h4>${savedWorkouts[i].playlistName}</h4></div>`)
        }
    }
}

// //variables set to return to home screen as workout is being displayed
var returnHomeButton = document.getElementById("return-home-button")

// //event listener to home button
returnHomeButton.addEventListener('click', function () {
    window.location.reload();
})

// Event listener for "save workout" button
var saveCollectionBtn = document.getElementById("save-collection");
saveCollectionBtn.addEventListener("click", function () {
    savetoLS();
})
// get the savedCollections from LS or create it if it doesn't exist
const savedCollections = JSON.parse(localStorage.getItem("savedCollections")) || [];
// save the selectedGenre, selectedTempo, and selectedCategory variables in LS
function savetoLS() {
    console.log("Saving your workout and playlist to localstorage");
    collectionEntry = {
        playlistName: document.getElementById("collection-name").value,
        genreQuery: selectedGenre,
        tempoQuery: selectedTempo,
        workoutQuery: selectedCategory

    }
    savedCollections.push(collectionEntry);
    localStorage.setItem("savedCollections", JSON.stringify(savedCollections));
}
// event listener for save workout button on results page
// shows a modal for name entry form when clicked
saveWorkoutButton = document.getElementById("save-workout")
saveWorkoutButton.addEventListener('click', function () {
    $('#save-workout-modal')
        .modal('show')
        ;
})
//check if save workout name field has an input
document.getElementById("collection-name").addEventListener("keydown", function () {
    if (document.getElementById("collection-name").value === "") {
        return false
    } else {
        document.getElementById("save-collection").classList.remove("disabled");
    }
})
//function to clear workout screen and display home screen
// function returnHome() {
//     //clear workout screen
//     changePage("quizResults", "home-screen")

//     //display home screen again
//     homeWorkouts.classList.remove("hidden transition")
// }

// call the display workouts function
displayWorkoutFromLS();



//base JavaScript file
var homeWorkouts = document.getElementById("homepage-workouts")

//'create new workout' quiz start button
var createWorkout = document.getElementById("create-workout")
createWorkout.addEventListener('click', function(){
    //clearScreen()

    //spotify event listener
    event.preventDefault();
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

    //Drew's workout API event listener
    let selectedCategory = document.querySelector('input[name="category"]:checked').value;
    console.log("button clicked")
    console.log(selectedCategory)


    getWorkoutRec(selectedCategory).catch(error => {
        console.log('error');
        console.error(error)});;
})

//write function to display the various results of each saved set of values
function clearScreen() {
    homeWorkouts.innerHTML = ""
}

//function to save the generated playlist and workouts into a single localstorage variable
function saveWorkoutToLS(){
    const code = document.getElementById("")
}

//function to clear contents. Use parameters to select which elements to take in and then hide/show
//call each time you have an old page and new page, pass in the string of ids for each element
function changePage(elementToHide, elementToShow){
    document.getElementById(elementToHide).classList.add("hide")
    document.getElementById(elementToShow).classList.remove("hide")
    
}

function startWorkout(e){
    e.preventDefault()
    console.log('click')
}

//clear contents of the page after each set of selections 
startButton = document.getElementById("start-button")
console.log(startButton)
//startButton.addEventListener('click', startWorkout)

//function to save displayed workout as localStorage. Save workouts in an array and each workout as an object
//save the results of the complete button to LS
function savetoLS(workout){
    var workouts = JSON.parse(localStorage.getItem("workouts")) || []
    workouts.push(workout)
    localStorage.setItem("workouts", JSON.stringify(workouts))
}

saveWorkoutButton = document.getElementById("save-workout")
//saveWorkoutButton.addEventListener('click', saveWorkout)

//nick will write function to save playlist to LS

let data = {}

//function to save workout and spotify results to a single API
function storeData(api, result){
    data[api] = JSON.parse(result)
    console.log(`storing results from ${api} array`)
}

//can we call storeData in getRecommendations and getWorkout? 

//function to load from localstorage. Pull the array with objects, and display the one that is relevant to you
//append new workout to the page
function displayWorkoutFromLS(workoutName) {
    var workouts = JSON.parse(localStorage.getItem("workouts"))

    //pull from respective keys in LS for workout and playlist 
    for (var i=0; i < workouts.length; i++) {
        if (workouts[i].name === workoutName) {
            //show workout on the page 
            displayWorkoutFromLS(workouts[i])
            break
        }
    }
}

//variables set to return to home screen as workout is being displayed
var returnHomeButton = document.getElementById("return-home-button")

//event listener to home button
returnHomeButton.addEventListener('click', returnHome)

//function to clear workout screen and display home screen
function returnHome() {
    //clear workout screen
    clearScreen()

    //display home screen again
    homeWorkouts.classList.remove("hide")
}





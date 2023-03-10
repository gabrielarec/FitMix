//base JavaScript file
var homeWorkouts = document.getElementById("homepage-workouts")

//'create new workout' quiz start button
var createWorkout = document.getElementById("genreSelection")
createWorkout.addEventListener('click', function(){
    clearScreen()


})

//write function to display the various results of each saved set of values
function clearScreen() {
    homeWorkouts.innerHTML = ""
}

//function to save the generated playlist and workouts into a single localstorage variable
function saveWorkoutToLS(){
    const code = document.getElementById("")
}


//write a function to select the respective genre

//music quiz buttons 
//is creating an ID for each item the best option? 
var musicButtons = document.getElementById("buttonID")

//tempo quiz buttons 
var tempoButtons = document.getElementById("tempoID")

//exercise speed buttons
var exerciseButtons = document.getElementById("exerciseButtons")

//music quiz next button

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
startButton.addEventListener('click', startWorkout)

//function to save displayed workout as localStorage. Save workouts in an array and each workout as an object
//save the results of the complete button to LS
function savetoLS(workout){
    var workouts = JSON.parse(localStorage.getItem("workouts")) || []
    workouts.push(workout)
    localStorage.setItem("workouts", JSON.stringify(workouts))
}

saveWorkoutButton = document.getElementById("save-workout")
saveWorkoutButton.addEventListener('click', saveWorkout)

//function to save workout
function saveWorkout(){
    //get all exercises and playlists to create workout object

    //call savetoLS and pass workout object

}

//function to load from localstorage. Pull the array with objects, and display the one that is relevant to you
//append new workout to the page


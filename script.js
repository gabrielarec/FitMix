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

//clear contents of the page after each set of selections 

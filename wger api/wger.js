// Click new workout button
// quiz
//music choices
//presented with randomized list of exercises from category of workouts 
// select music genre
// user can save or not

//after talking with team - click button get workout function - 

const workoutArea = document.getElementById("workout");


// define form elements as variables
const submitBtn = document.getElementById("submitBtn");
const exerciseList = 'https://wger.de/api/v2/exercise/?language=2&category='

submitBtn.addEventListener("click", () => {
    let selectedCategory = document.querySelector('input[name="category"]:checked').value;
    console.log("button clicked")
    console.log(selectedCategory)

    

    getWorkoutRec(selectedCategory).catch(error => {
        console.log('error');
        console.error(error)});;
    
})

async function getWorkoutRec (selectedCategory) {
const response = await fetch(`${exerciseList}${selectedCategory}&limit=6`);
const data = await response.json();
console.log(data.results[0].name)


workoutArea.append(data.results[0].name)
workoutArea.append(data.results[0].name)





//console.log(data.results.filter(el => el.category===10));
}

// get category Id 
//filter exercise list to category id
//set limit 5

//getWorkoutRec(selectedCategory)
//})


//function getWorkoutRec() {
  //  fetch('https://wger.de/api/v2/exercise/', requestsOptions)
    //.then(response => response.text())
    //.then(result => displayResults(result))
    //.catch(error => console.log('error', error)); 
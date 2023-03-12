const workoutName0 = document.getElementById("workoutName0");
const workoutDesc0 = document.getElementById("workoutDesc0");
const workoutName1 = document.getElementById("workoutName1");
const workoutDesc1 = document.getElementById("workoutDesc1");
const workoutName2 = document.getElementById("workoutName2");
const workoutDesc2 = document.getElementById("workoutDesc2");
const workoutName3 = document.getElementById("workoutName3");
const workoutDesc3 = document.getElementById("workoutDesc3");
const workoutName4 = document.getElementById("workoutName4");
const workoutDesc4 = document.getElementById("workoutDesc4");
const workoutName5 = document.getElementById("workoutName5");
const workoutDesc5 = document.getElementById("workoutDesc5");



// define form elements as variables
const submitWorkoutBtn = document.getElementById("submitWorkoutBtn");
const exerciseList = 'https://wger.de/api/v2/exercise/?language=2&category='

// submitWorkoutBtn.addEventListener("click", () => {
//     let selectedCategory = document.querySelector('input[name="category"]:checked').value;
//     console.log("button clicked")
//     console.log(selectedCategory)

    

//     getWorkoutRec(selectedCategory).catch(error => {
//         console.log('error');
//         console.error(error)});;
    
// })

async function getWorkoutRec (selectedCategory) {
const response = await fetch(`${exerciseList}${selectedCategory}&limit=6`);
const data = await response.json();


let cleanTextDesc0 = data.results[0].description.replace(/<\/?[^>]+(>|$)/g, "");
console.log(cleanTextDesc0);
let cleanTextDesc1 = data.results[1].description.replace(/<\/?[^>]+(>|$)/g, "");
console.log(cleanTextDesc1);
let cleanTextDesc2 = data.results[2].description.replace(/<\/?[^>]+(>|$)/g, "");
console.log(cleanTextDesc2);
let cleanTextDesc3 = data.results[3].description.replace(/<\/?[^>]+(>|$)/g, "");
console.log(cleanTextDesc3);
let cleanTextDesc4 = data.results[4].description.replace(/<\/?[^>]+(>|$)/g, "");
console.log(cleanTextDesc4);
let cleanTextDesc5 = data.results[5].description.replace(/<\/?[^>]+(>|$)/g, "");
console.log(cleanTextDesc5);


workoutName0.append(data.results[0].name);
workoutDesc0.append(cleanTextDesc0);
workoutName1.append(data.results[1].name);
workoutDesc1.append(cleanTextDesc1);
workoutName2.append(data.results[2].name);
workoutDesc2.append(cleanTextDesc2);
workoutName3.append(data.results[3].name);
workoutDesc3.append(cleanTextDesc3);
workoutName4.append(data.results[4].name);
workoutDesc4.append(cleanTextDesc4);
workoutName5.append(data.results[5].name);
workoutDesc5.append(cleanTextDesc5);

}

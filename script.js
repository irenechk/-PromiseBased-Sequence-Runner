// Utility function to log messages with timestamp
const logMessage = (message) => {

const progressDiv = document.getElementById("progress");
const time = new Date().toLocaleTimeString();

progressDiv.innerHTML += `<p>[${time}] ${message}</p>`;
progressDiv.scrollTop = progressDiv.scrollHeight;

};


// Update task status
const updateStatus = (taskId, status) => {

const el = document.querySelector(`#${taskId} .status`);

el.textContent = status;
el.className = `status ${status.toLowerCase()}`;

};


// Simulated Async Tasks

const task1 = () => {

return new Promise((resolve)=>{

logMessage("Task 1 Started...");
updateStatus("task1","Running");

setTimeout(()=>{

updateStatus("task1","Completed");
resolve("Task 1 Completed");

},1000);

});

};


const task2 = () => {

return new Promise((resolve)=>{

logMessage("Task 2 Started...");
updateStatus("task2","Running");

setTimeout(()=>{

updateStatus("task2","Completed");
resolve("Task 2 Completed");

},2000);

});

};


const task3 = () => {

return new Promise((resolve,reject)=>{

logMessage("Task 3 Started...");
updateStatus("task3","Running");

setTimeout(()=>{

updateStatus("task3","Completed");
resolve("Task 3 Completed");

/* to test error handling
reject("Task 3 Failed");
*/

},1000);

});

};


// Task Array
const tasks = [task1, task2, task3];


// Execution Controller Function
const runSequentially = async (taskArray) => {

const results = [];
const progressFill = document.getElementById("progressFill");

for(let i=0;i<taskArray.length;i++){

try{

const result = await taskArray[i]();

logMessage(result);
results.push(result);

const percent = ((i+1)/taskArray.length)*100;
progressFill.style.width = percent + "%";

}
catch(error){

logMessage(`Error: ${error}`);
throw error;

}

}

return results;

};


// Run Button Event
document.getElementById("runBtn").addEventListener("click",async()=>{

document.getElementById("progress").innerHTML="";
document.getElementById("results").innerHTML="";

try{

const finalResults = await runSequentially(tasks);

finalResults.forEach(result=>{

const li = document.createElement("li");
li.textContent = result;

document.getElementById("results").appendChild(li);

});

logMessage("All Tasks Executed Successfully");

}

catch(error){

logMessage("Execution Stopped Due to Error");

}

});


// Reset Button
document.getElementById("resetBtn").addEventListener("click",()=>{

document.getElementById("progress").innerHTML="";
document.getElementById("results").innerHTML="";
document.getElementById("progressFill").style.width="0%";

updateStatus("task1","Pending");
updateStatus("task2","Pending");
updateStatus("task3","Pending");

});
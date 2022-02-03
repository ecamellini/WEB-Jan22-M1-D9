// Tips for naming variables:
// If it is a boolean, use a question: isDaySelected
// If you name a function: always use an imperative verb, because you are ordering the code to do something
// If it is a DOM element (i.e, a reference to a tag) end the variable name with Node or with Tag
// Otherwise --> just find a meaningful name FOR YOU, ask yourself "What is this?" and the name should be the answer to this question

const onLoad = function() {
    // We execute ANY CODE that must be executed just after page load
    // Initialization of data, etc. etc.
    // Never execute function right away in JS, outside any other function.
    // Use window.onload...

    createDays()
}
// We tell the browser to execute the function above, on page load
window.onload = onLoad // We assigned our onLoad function to the browser onload.

const selectDay = function(event) {
    // Let's de-select the previously selected day
    // 1) Find the day that we selected
    let currentlySelectedDayNode = document.querySelector(".selected")
    // Or document.getElementsByClassName("selected")[0] --> the first (and only) element with class .selected
    // Remember that querySelector always returns the first element it finds, while getElementsByClassName returns more than one

    // 2) De-select it
    if (currentlySelectedDayNode !== null) {
        currentlySelectedDayNode.classList.remove('selected')
    }

    // 3) Let's get the new day we clicked on, the where the event happened
    let clickedDayNode = event.target // The event.target attribute ALWAYS returns the node where the event was triggered by the user

    // 4) Let's add the selected class
    clickedDayNode.classList.add('selected')

    // We could have styled it here
    // BUT WE DON'T WANT TO WRITE STYLE IN JAVASCRIPT
    // clickedDayNode.style.color = "red"
    // clickedDayNode.style.borderColor = "red"
    // We want to decouple as much as possible structure, functionalities, and styles
    // HTML - JS - CSS
}

const createDays = function() {
    // TODO get the days for the current month
    // Assumption: use 31 days always, in this first release
    let numberOfDays = 31

    // 1) Let's get the days container div
    let daysContainerNode = document.getElementById('days-container')

    // 2) For loop 31 times
    for (let dayNumber = 1; dayNumber <= numberOfDays; dayNumber++) {
        // In each iteration of the for loop
        // 1) create the div
        let dayDivNode = document.createElement('div')

        // 2) we customize it --> add the .day class
        dayDivNode.innerText = dayNumber
        dayDivNode.classList.add("day")

        dayDivNode.onclick = selectDay // Just the name of the function, do not call it
        // To pass parameters to the selectDay function, we would need a lambda function
        // It will be a topic for the next modules

        // dayDivNode.addEventListener("click", selectDay) // Alternative to the line above

        // 3) attach it to the DOM
        daysContainerNode.appendChild(dayDivNode)
    }
}


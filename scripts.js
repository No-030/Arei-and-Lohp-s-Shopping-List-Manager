let shoppingList = [];

document.getElementById("itemAdd")
    .addEventListener("click", addItem);

document.getElementById("itemRemove")
    .addEventListener("click", removeItem);

document.getElementById("LoadList")
    .addEventListener("click", displayList);

document.getElementById("ExitList")
    .addEventListener("click", exit);

function addItem(){
    const newItem = document.getElementById("itemInput").
    value.trim(); 
    if (newItem !== "") {
    shoppingList.push(newItem)
    document.getElementById("shoppingList")
    .innerHTML += `<li>${newItem}</li>`;
    document.getElementById("itemInput").value = "";
    }
}

function removeItem() {
    const itemInput = document.getElementById("itemInput");
    const itemNumber = parseInt(itemInput.value);

    if (itemNumber >= 1 && itemNumber <= shoppingList.length) {
        shoppingList.splice(itemNumber - 1, 1);
        displayList();
    } else {
        itemInput.value = "Invalid item number";
        console.log("Invalid item number.");
    }
}

let listVisible = true; // Variable to track list visibility

function toggleList() {
    const listContainer = document.getElementById("shoppingList");

    if (listVisible) {
        listContainer.innerHTML = ""; // Clear the list when hiding
        listContainer.style.display = "none"; // Hide the list container
    } else {
        displayList(); // Update the list display
        listContainer.style.display = "block"; // Show the list container
    }
    
    listVisible = !listVisible; // Toggle visibility state
}

function displayList() {
    const listContainer = document.getElementById("shoppingList");
    listContainer.innerHTML = "";

    shoppingList.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        listContainer.appendChild(listItem);
    });
}


function exit() {
    shoppingList = []; // Clear the shopping list array
    displayList(); // Update the display to show an empty list
    itemInput.value = "Goodbye!";
    console.log("Goodbye!");
}

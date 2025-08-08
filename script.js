const infiList = document.getElementById('infi-list');
let itemCount = 0;

// Function to add list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    itemCount++;
    li.textContent = `Item ${itemCount}`;
    infiList.appendChild(li);
  }
}

// Add 10 items initially
addItems(10);

// Add scroll event listener
infiList.addEventListener('scroll', () => {
  
    // User reached the bottom of the list
    addItems(2);
});

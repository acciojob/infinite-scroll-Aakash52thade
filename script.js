const list = document.getElementById("infi-list");
let count = 1;

// Add n items
function addItems(n) {
  for (let i = 0; i < n; i++) {
    const item = document.createElement("li");
    item.textContent = `List Item ${count++}`;
    list.appendChild(item);
  }
}

// Initial 10 items
addItems(10);

// Infinite scroll inside the list (not page)
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight - 5) {
    addItems(2);
  }
});

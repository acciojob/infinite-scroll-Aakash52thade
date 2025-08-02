const list = document.getElementById("infi-list");
let count = 1;


function addItem(n) {
	for(let i=0; i<n; i++){
		let item = document.createElement('li');
		item.textContent = `item ${n}`;
		list.appendChild(item);
	}
}

window.addEventListner('scroll", () => {
	const scrollTop = window.scrollY;		
    const viewportHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight

    if (scrollTop + windowHeight >= fullHeight - 10) {
    addItems(2); // Add 2 new items
  }
});
addItems(10);









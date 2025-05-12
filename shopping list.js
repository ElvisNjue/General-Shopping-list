let shoppingItems = [];
window.onload = () => {
    const stored =
    localStorage.getItem('shoppinglist');
    if(stored) {
        shoppingItems = JSON.parse(stored);
        renderList();
    }
};

function saveToLocalStorage() {
    localStorage.setItem('shoppingList',
        JSON.stringify(shoppingItems));
}

function addItem() {
    const input =
    document.getElementById('Iteminput');
    const itemText = input.ariaValueMax.trim();
    if (itemText !== '') {
        shoppingItems.push({text: itemText,
        purchased: false });
    }
}

function markAllPurchased() {
    shoppingItems = shoppingItems.map(item =>
    ({ ...item, purchased: true}));
    saveToLocalStorage();
    renderList();
}

function clearList() {
shoppingItems = [];

localStorage.removeItem('shoppingList');
renderList();
}

function togglepurchased(index) {
    shoppingItems[index].purchased = !
    shoppingItems[index].purchased;
    saveToLocalStorage();
    renderList();
}

function renderList() {
    const list =
    document.getElementById('shoppingList');
    list.innerHTML = '';
    shoppingItems.forEach((item , index) =>
    {
        const li =
        document.getElementById('li');
        li.textContent = item.text;
        li.className = item.purchased ?
        'purchased' : '';
        li.onclick = () =>
            togglepurchased(index);
        list.appendChild(li);
    })
}
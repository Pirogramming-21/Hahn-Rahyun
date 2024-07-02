// Fetch the items from the JSON file
function loadItems() {
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

// main
loadItems() // 프로미스로 items를 받아와서
    .then(items => {
        displayItems(items); // html에 아이템들을 보여주고
        setEventListeners(items); // item을 클릭했을 때 적절한 이벤트가 나타나도록
    })
    .catch(console.log);
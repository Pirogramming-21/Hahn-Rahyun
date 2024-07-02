// Fetch the items from the JSON file
function loadItems() { // loadItems 함수는
    return fetch('data/data.json') // fetch를 통해 해당 경로의 파일로부터 데이터를 받아
    .then(response => response.json()) // 성공적으로 받아졌다면 json 형태로 바꾸고
    .then(json => json.items); // json 안의 items 배열로 바꿔서 반환함
}

// items 오브젝트를 받아와서 li로 변환 후 하나의 문자열로 만들어서 innerHTML에 추가
function displayItems(items) {
    const container = document.querySelector('.items');
    // html의 items 클래스를 container에
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// create HTML list item from the given data item
function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    if(key == null || value == null) {
        return;
    }

    const filtered = items.filter(item => item[key] === value);
    console.log(filtered);
    displayItems(filtered);
}

// Handle button click
/*function onButtonClick(event, items) {
    const target = event.target;
    const key = target.dataset.key;
    const value = target.dataset.value;
    if (key == null || value == null) {
        return;
    }
    updateItems(items, key, value);
}

// Make the items matching {key: value} invisible
function updateItems(items, key, value) {
    items.forEach(item => {
        if (item.dataset[key] == value) {
            item.classList.remove('invisible');
        } else {
            item.classList.add('invisible');
        }
    });
}*/

function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event, items));
}

// main
loadItems() // 프로미스로 items를 받아와서
    .then(items => {
        displayItems(items); // html에 아이템들을 보여주고
        setEventListeners(items); // item을 클릭했을 때 적절한 이벤트가 나타나도록
    })
    .catch(console.log);
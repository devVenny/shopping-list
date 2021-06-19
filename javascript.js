// 1. Input의 value 받아서 화면에 list로 출력.
// 2. Delete 버튼 눌러서 아이템 한 개 삭제.
// 3. plus-circle 아이콘 클릭하여 모든 아이템 삭제.
// 4. 목록이 화면에 가득찼을 떄 스크롤 기능 추가.

'user strict'

const form = document.querySelector('.footer');
const input = document.querySelector('.input');
const items = document.querySelector('.list__items');

function paintList(text){
    const li = document.createElement("li");
    li.setAttribute('class', 'item');

    const span = document.createElement("span");
    span.setAttribute('class', 'item__name');
    span.textContent=`- ${text}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute('class', 'item__button');
    deleteBtn.textContent='X'

    deleteBtn.addEventListener('click', (e) => {
        const target =  e.target.parentNode;
        items.removeChild(target);
    });

    li.append(span);
    li.append(deleteBtn);
    items.append(li);
}

function onAdd(e){
    e.preventDefault();
    const currentValue = input.value;
    paintList(currentValue);
    input.value='';
}

form.addEventListener('submit', onAdd);
const array = [];

const Form = document.querySelector(".stats_form");
const FormInput = document.querySelector(".stats_form__input");
const UL = document.querySelector(".toDoList");


Form.addEventListener("submit", (e) => {
    e.preventDefault();

    let ID = String(Date.now())
    let Value = FormInput.value;

    addToList(ID, Value);
    addToArray(ID, Value);

    FormInput.value = '';
})

function addToList(a,b){
    const item = document.createElement("li");

    item.setAttribute("data-id",a);
    item.innerText = b;
    UL.appendChild(item);
} 



function addToArray(a,b){
    array.push({a,b});

}

UL.addEventListener("click",(e) => {
    const getID = e.target.getAttribute("data-id");

    removeItemFromList(getID);
    removeItemFromArray(getID);
})

function removeItemFromList(a){
    const li = document.querySelector('[data-id="' + a + '"]');

    UL.removeChild(li);
}

function removeItemFromArray(a){
    array = array.filter((item) => {item.itemID !== a})
    console.log(array)
}
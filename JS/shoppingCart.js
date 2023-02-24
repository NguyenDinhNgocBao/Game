
const cart = document.getElementById('cart');
const menu = document.getElementById('list-main');
cart.addEventListener('click', function(){
    menu.classList.toggle('display');
})

function number(){
    const number = document.createElement('div');

}




if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", Run);
}else{
    Run();
}


function Run(){
    const addToCartBTN = document.getElementsByClassName("ADD");
    console.log(addToCartBTN.length);
    for(let i = 0; i < addToCartBTN.length; i++) {
        const buttonAdd = addToCartBTN[i];
        console.log(buttonAdd);
        buttonAdd.addEventListener("click", (e) =>{
            const button = e.target;
            const gameItem = button.parentElement.parentElement;
            const title = gameItem.getElementsByClassName("title")[0].innerText;
            const img = gameItem.getElementsByClassName("img-game")[0].src;
            addItemToCart(img, title);
        })
    }
}

function addItemToCart(img, title){
    const itemGame = document.createElement("div");
    const listItem = document.getElementById("list-main");
    console.log(listItem);
    const content = `
    <div class="shopping_cart-list-item">
        <img class="shopping_cart-list-item-img" src="${img}" alt="">
        <p class="shopping_cart-list-item-name">${title}</p>
        <a href=""><i class="fa-solid fa-download"></i></a>
        <button class="btn-delete" type="button">X</button>
    </div>
    `
    itemGame.innerHTML = content;
    listItem.append(itemGame);

    DeleteItem();
}


function DeleteItem(){
    var removeCart = document.getElementsByClassName("btn-delete");
    console.log(removeCart);
    const cartItem = document.getElementsByClassName("shopping_cart-list-item")
    const quantity = document.getElementById("quantity-current")
    console.log(quantity);
    const number = document.getElementById("number-current")
    quantity.innerText = cartItem.length; 
    number.innerText = cartItem.length;  

    for(let i = 0; i < removeCart.length; i++){
        const buttonX = removeCart[i];
        buttonX.addEventListener("click", function Delete(e){
            var clickCurrent = e.target;
            clickCurrent.parentElement.parentElement.remove();
            quantity.innerText = cartItem.length;   
            number.innerText = cartItem.length;
        });
    }
}
function foodCard(dishIndex){
  return `
    <div class="food-card" id="food-card">
        <section>
            <img class="food-card-image" src="./assets/img/book-cover.png" alt="">
        </section>
        <section>
            <div class="details">
            <h2>${dishes[dishIndex].name}</h2>
            <h3>${dishes[dishIndex].description}</h3>
            <button onclick="addFood(${dishIndex})">ADD</button>
        </section>
    </div>
    `;
}

function cartCard(cartIndex){
    return `
    <div class="cart-card" id="cart-card">
        <section>
            <img class="cart-card-image" src="./assets/img/book-cover.png" alt="">
        </section>
        <section>
            <div class="details">
            <h3>${dishes[cartIndex].name}</h3>
            <h4>${cart[cartIndex]}</h4>
            <div>${cart[cartIndex] * dishes[cartIndex].price}</div>
        </section>
    </div>
    `;
}

function totalCard(total){
    return `
    <div class>${total.toFixed(2)}€</div>
    `
}
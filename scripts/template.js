function foodCard(dishIndex){
  return `
    <div class="food-card" id="food-card">
        <section>
            <img class="food-card-image" src="${dishes[dishIndex].image}" alt="${dishes[dishIndex].description}">
        </section>
        <section>
            <div class="food-card-details">
            <h2>${dishes[dishIndex].name}</h2>
            <h3>${dishes[dishIndex].description}</h3>
        </section>
        <section class="food-card-last">
            <img class="cart-card-icon food-cart-icon" src="./assets/icon/add.svg" alt="abziehen"
                onclick="addFood(${dishIndex})">
        </section>
    </div>
    `;
}

function cartCard(cartIndex){
    return `
    <div class="cart-card" id="cart-card">
        <section class="cart-card-thumbnail">
            <img class="cart-card-image" src="${dishes[cartIndex].image}" alt="${dishes[cartIndex].description}">
        </section>
        <section class="cart-card-details">
            <h3>${dishes[cartIndex].name}</h3>
            <div class="cart-card-details-card">
                <img class="cart-card-icon" src="./assets/icon/remove.svg" alt="abziehen"
                    onclick="removeFood(${cartIndex})">
                <div class="">${cart[cartIndex]}x</div>
                <img class="cart-card-icon" src="./assets/icon/add.svg" alt="hinzufügen"
                    onclick="addFood(${cartIndex})">
                <div class="">${cart[cartIndex] * dishes[cartIndex].price}€</div>
                <img src="./assets/icon/delete.svg" alt="entfernen"
                    onclick="setZero(${cartIndex})">
            </div>
        </section>
    </div>
    `;
}

function totalCard(total){
    return `
    <div class>${total.toFixed(2)}€</div>
    `
}
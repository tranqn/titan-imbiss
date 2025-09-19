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
            <h3>${dishes[dishIndex].price.toFixed(2)}€</h3>
        </section>
        <section class="food-card-last">
            <img class="cart-card-icon food-cart-icon" src="./assets/icon/add.svg" alt="abziehen"
                onclick="addBillItem(${dishIndex})">
        </section>
    </div>
    `;
}

function cartCard(cartIndex){
    return `
    <div class="cart-card" id="cart-card-${cartIndex}">
        <section class="cart-card-thumbnail">
            <img class="cart-card-image" src="${cart[cartIndex].image}" alt="${cart[cartIndex].description}">
        </section>
        <section class="cart-card-details">
            <h3>${cart[cartIndex].name}</h3>
            <div class="cart-card-details-card">
                <img class="cart-card-icon btn-remove" data-name="${cart[cartIndex].name}" src="./assets/icon/remove.svg" alt="abziehen">
                <div>${cart[cartIndex].amount}x</div>
                <img class="cart-card-icon btn-add" data-name="${cart[cartIndex].name}" src="./assets/icon/add.svg" alt="hinzufügen">
                <div>${(cart[cartIndex].amount * cart[cartIndex].price).toFixed(2)}€</div>
                <img class="cart-card-icon btn-delete" data-name="${cart[cartIndex].name}" src="./assets/icon/delete.svg" alt="entfernen">
            </div>
        </section>
    </div>
    `;
}

function totalCard(total){
    return `
    <div>Gesamt: ${total.toFixed(2)}€</div>
    `
}
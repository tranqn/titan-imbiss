function init(){
  setMenu(0);
}

function renderFoodCard(dishIndex){
  const foodLoaderRef = document.getElementById("food-loader");
  foodLoaderRef.innerHTML += foodCard(dishIndex);
}

function changeMenuName(categoriesIndex){
  const menuCardRef = document.getElementById("menu-card");
  menuCardRef.innerHTML = categories[categoriesIndex].name;
}

function setMenu(categoriesIndex){
  const foodLoaderRef = document.getElementById("food-loader");
  foodLoaderRef.innerHTML = "";

  switch(categoriesIndex){
    case 0:
      Menu(categoriesIndex);
      break;
    case 1:
      MenuRice(categoriesIndex);
      break;
    case 2:
      MenuNoodles(categoriesIndex);
      break;
    case 3:
      MenuSides(categoriesIndex);
      break;
  }
}

function MenuRice(categoriesIndex){
  changeMenuName(categoriesIndex);
  for(let dishIndex = 0; dishIndex < dishes.length; dishIndex++){
    if(dishes[dishIndex].category == "rice"){
      renderFoodCard(dishIndex);
    }
  }
}

function MenuNoodles(categoriesIndex){
  changeMenuName(categoriesIndex);
  for(let dishIndex = 0; dishIndex < dishes.length; dishIndex++){
    if(dishes[dishIndex].category == "noodles"){
      renderFoodCard(dishIndex);
    }
  }
}

function MenuSides(categoriesIndex){
  changeMenuName(categoriesIndex);
  for(let dishIndex = 0; dishIndex < dishes.length; dishIndex++){
    if(dishes[dishIndex].category == "sides"){
      renderFoodCard(dishIndex);
    }
  }
}

function Menu(categoriesIndex){
  changeMenuName(categoriesIndex);
  for(let dishIndex = 0; dishIndex < dishes.length; dishIndex++){
      renderFoodCard(dishIndex);
  }
}

function renderCart(){
  const cartLoaderRef = document.getElementById("cart-loader");
  cartLoaderRef.innerHTML = "";

  for(let cartIndex = 0; cartIndex < cart.length; cartIndex++){
    if(cart[cartIndex] && cart[cartIndex].amount > 0){
      cartLoaderRef.innerHTML += cartCard(cartIndex);
    }
  }

  attachCartEventListeners();
  renderTotalCart();
}

function attachCartEventListeners() {
  // alle "entfernen"-Buttons
  document.querySelectorAll(".btn-remove").forEach(btn => {
    if (!btn.dataset.listenerAdded) {
      btn.addEventListener("click", () => {
        removeBillItem(btn.dataset.name);
      });
      btn.dataset.listenerAdded = "true"; // Marker setzen
    }
  });

  // alle "hinzufügen"-Buttons
  document.querySelectorAll(".btn-add").forEach(btn => {
    if (!btn.dataset.listenerAdded) {
      btn.addEventListener("click", () => {
        addBillItemCart(btn.dataset.name);
      });
      btn.dataset.listenerAdded = "true";
    }
  });

  // alle "löschen"-Buttons
  document.querySelectorAll(".btn-delete").forEach(btn => {
    if (!btn.dataset.listenerAdded) {
      btn.addEventListener("click", () => {
        setAmountZero(btn.dataset.name);
      });
      btn.dataset.listenerAdded = "true";
    }
  });
}

function renderTotalCart(){
  const totalRef = document.getElementById("total");
  let total = 0;
  for(let cartIndex = 0; cartIndex < cart.length; cartIndex++){
    total += cart[cartIndex].amount * cart[cartIndex].price;
  }
  if(total == 0){
    totalRef.innerHTML = totalCard(0)
  }
  else{
    totalRef.innerHTML = totalCard(total + 5);
  }
}

function closeScreen(){
const cartRef = document.getElementById('small-cart');
const bodyRef = document.body;
cartRef.classList.add("d_none");
bodyRef.classList.remove("scroll-y-hidden");
}

function fullScreen(){
  const cartRef = document.getElementById('small-cart');
  const bodyRef = document.body;
  cartRef.classList.remove("d_none");
  bodyRef.classList.add("scroll-y-hidden");
  renderDialog();
  window.scrollTo(0, 0);
}

function addBillItem(dishIndex){
  let billItem = Object.create(billItemProto);
  billItem.name = dishes[dishIndex].name;
  billItem.price = dishes[dishIndex].price;
  billItem.image = dishes[dishIndex].image;
  billItem.description = dishes[dishIndex].description;

  const billItemRef = cart.find(element => element.name === billItem.name)

  if (!billItemRef) {
    billItem.amount = 1;
    cart.push(billItem);
  }
  else {
    billItemRef.amount++;
  }
  renderCart();
}

function removeBillItem(billItemName){
  const billItemRef = cart.find(element => element.name === billItemName)
  billItemRef.amount--;
  renderCart();
  renderDialog();
}

function addBillItemCart(billItemName){
  const billItemRef = cart.find(element => element.name === billItemName)
  billItemRef.amount++;
  renderCart();
  renderDialog();
}

function setAmountZero(billItemName){
  const billItemRef = cart.find(element => element.name === billItemName)
  billItemRef.amount = 0;
  renderCart();
  renderDialog();
}

function showOrderDialog(){
  const dialogRef = document.getElementById('order-dialog');
  cart = [];
  renderCart();
  renderDialog();
  dialogRef.showModal();
}

function closeOrderDialog(){
  const dialogRef = document.getElementById('order-dialog');
  dialogRef.close();
}
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

function addFood(dishIndex){
  cart[dishIndex]++;
  renderCart();
}

function removeFood(dishIndex){
  cart[dishIndex]--;
  renderCart();
}

function setZero(dishIndex){
  cart[dishIndex] = 0;
  renderCart();
}

function renderCart(){
  const cartLoaderRef = document.getElementById("cart-loader");
  cartLoaderRef.innerHTML = "";
  for(let cartIndex = 0; cartIndex < cart.length; cartIndex++){
    if(cart[cartIndex]!= 0){
      cartLoaderRef.innerHTML += cartCard(cartIndex);
    }
  }
  renderTotal();
}

function renderTotal(){
  const totalRef = document.getElementById("total");
  let total = 0;
  for(let cartIndex = 0; cartIndex < cart.length; cartIndex++){
    total += cart[cartIndex] * dishes[cartIndex].price.toFixed(2);
  }
  totalRef.innerHTML = totalCard(total);
}
function addFoodDialog(dishIndex){
  cart[dishIndex]++;
  renderDialog();
}

function removeFoodDialog(dishIndex){
  cart[dishIndex]--;
  renderDialog();
}

function setZeroDialog(dishIndex){
  cart[dishIndex] = 0;
  renderDialog();
}


function renderDialog(){
  const dialogLoaderRef = document.getElementById("dialog-loader");
  dialogLoaderRef.innerHTML = "";
  for(let cartIndex = 0; cartIndex < cart.length; cartIndex++){
    if(cart[cartIndex] && cart[cartIndex].amount > 0){
      dialogLoaderRef.innerHTML += cartCard(cartIndex);
    }
  }
  attachCartEventListeners();
  renderTotalDialog();
}

function renderTotalDialog(){
  const totalRef = document.getElementById("dialog-total");
  let total = 0;
  for(let cartIndex = 0; cartIndex < cart.length; cartIndex++){
    total += cart[cartIndex].amount * cart[cartIndex].price.toFixed(2);
  }
  
  if(total == 0){
  totalRef.innerHTML = totalCard(0)
  }
  else{
    totalRef.innerHTML = totalCard(total + 5);
  }
  totalRef.innerHTML = totalCard(total);
}
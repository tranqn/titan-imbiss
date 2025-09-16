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

function fullScreen(){
  const dialogRef =document.getElementById("gerichte-id");
  dialogRef.showModal();
  renderDialog();
}

function closeScreen(){
  const dialogRef =document.getElementById("gerichte-id");
  dialogRef.close();
}

function renderDialog(){
  const dialogLoaderRef = document.getElementById("dialog-loader");
  dialogLoaderRef.innerHTML = "";
  for(let cartIndex = 0; cartIndex < cart.length; cartIndex++){
    if(cart[cartIndex]!= 0){
      dialogLoaderRef.innerHTML += cartCardDialog(cartIndex);
    }
  }
  renderTotalDialog();
}

function renderTotalDialog(){
  const totalRef = document.getElementById("dialog-total");
  let total = 0;
  for(let cartIndex = 0; cartIndex < cart.length; cartIndex++){
    total += cart[cartIndex] * dishes[cartIndex].price.toFixed(2);
  }
  totalRef.innerHTML = totalCard(total);
}
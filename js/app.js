var tarjet = prompt("Ingrese número de tarjeta");
var newArray = [];
var sum = 0;

function isValidCard (tarjet,newArray){
  for(var i=0; i< tarjet.length; i++){
  newArray.push(i);
  for(var j=0;j<newArray.length; j++){
    var item = newArray.pop();
    newArray.splice(j,0,item);
  
  for(var y=0; y<newArray.length;  y++){
    if(newArray.length % 2 === 0){
      var firstNumber = newArray[y] % 10;
      var secondNumber = parseInt(newArray[y] / 10);
      var sumDigitos = firstNumber + secondNumber;
    }
    else{
      return newArray[y];
    }
    
    for(var x=0; x<newArray.length; x++){
      if(newArray[x] % 2 === 0){
        sum += newArray[x];
      }
    }
    if(sum % 10 === 0){
      return "TARJETA VÁLIDA";
    }
    else{
      return "TARJETA INVÁLIDA";
    }
  }
}
}
  return newArray;
  }


const moneyValues = {'ONE HUNDRED': 100, 'TWENTY': 20, 'TEN': 10, 'FIVE': 5, 'ONE': 1, 'QUARTER': 0.25, 'DIME': 0.1, 'NICKEL': 0.05, 'PENNY': 0.01}
const statusMsg = (option) => {
  switch (option) {
    case 1:
      return "INSUFFICIENT_FUNDS"
    case 2:
      return "CLOSED";
    case 3:
      return "OPEN";
  }
}
const highestUnit = (crValue) => {
  for(let unitName of moneyValues){
    if(moneyValues[unitName] <= crValue){
      return unitName;
    }
  }
  return null;
};
const maxMul = (numa,numb,qnt) =>{
  if(numb === 0){
    return undefined;
  }
  if ( qnt > Math.floor(numa/numb)){
    return Math.floor(numa/numb);
  }else {
    return Math.floor(qnt);
  }
};
const calChange = (changeValue, cidArr) => {
  const auxChange = [];
  let _changeValue = changeValue;
  for (let [ key, value ] of cidArr.reverse()) {
    let comp = _changeValue % moneyValues[key];
    if(comp >= 0 && _changeValue > 0 && comp != _changeValue){
      let mChange = maxMul(_changeValue,moneyValues[key], value) * moneyValues[key];
      _changeValue -= mChange;
      auxChange.push([key,mChange]);
    }
  }
  return auxChange;
};
function checkCashRegister(price, cash, cid) {
  let op;
  if (cash - price < 0) {
    op = 1;
  }
  else if (cash == price){
    op = 2;
  }
  else{
    op = 3;
  }
  return { status: statusMsg(op), change: calChange(cash - price,cid) };
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
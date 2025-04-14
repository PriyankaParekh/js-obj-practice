//1. 
function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  alert( ucFirst("john") );

//2.
checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

function checkSpam(str){
    str=str.toLowerCase();
    return str.include('viagra') || str.include('xxx');
}

//3.
function truncate(str, maximum) {
    return (str.length > maximum) ?
      str.slice(0, maximum - 1) + '…' : str;
  }

//4.
function extractCurrencyValue(str) {
    return +str.slice(1);
  }
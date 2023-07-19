'use strict';

// BINARIO - DECIMAL
/*
   Binario:        1     0     
   Indice:         0     1     
   potencia:      2^1   2^0
   Resolviendo:    2   + x  = 2
   **x --> No se considera cuando el binarioes '0'

   Binario: 111
    1     1     1 
   2^2   2^1   2^0 
    4  +  2  +  1   ==> 7 

*/

function BinarioADecimal(num) {
   /*
   let decimal = 0; // 2 /
   let potencia = num.length - 1; // 1 - 0
   for(let i= 0; i<num.length; i++){ // indice 0 / 1 
      decimal += Math.pow(2,potencia)*num[i]; // 0 + 2^1*1 = 2 / 2 + 2^0*0 = 2
      potencia--;//0 -1
   }
   return decimal;*/
   return parseInt(num, 2);

}



/*
function BinarioADecimal(num) {
   var decimal = 0; 
   var exponente = 0;

   for (var i = num.length - 1; i >= 0; i--) {
     var digito = parseInt(num[i]); 
     if (isNaN(digito) || digito < 0 || digito > 1) {
      return NaN;
    }
     decimal += digito * Math.pow(2, exponente);
     exponente++;
   }
 
   return decimal;
}*/

console.log(BinarioADecimal('10')) // 2;
console.log(BinarioADecimal('111')) // 7;

/*
  Decimal: 4
            Resto
   4/2 = 2    0
   2/2 = 1    0
   1/2 = 0    1
   Binario   100

*/

function DecimalABinario(num) {
   
   let binario = ''; //
   while(num>0){// 4 - 2 - 1
      binario = (num%2) + binario;// 0 + ''= '0' / 0 + '0'= '00'/ 1 + '00'= '100'
      num = Math.floor(num/2); // 2 - 1 - 0
   }
   return binario;
   //return num.toString(2)
}
console.log(DecimalABinario(4)) // '100'
console.log(DecimalABinario(7)) // '111'



module.exports = {
   BinarioADecimal,
   DecimalABinario,
};


//Scope & Hoisting
//EJERCICIO 01
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); //10
   console.log(a); //8
   var f = function (a, b, c) {
      b = a;
      console.log(b);// 8
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b); // 9
};
c(8, 9, 10);
console.log(b); // 10
console.log(x); // 1

//EJERCICIO 02
console.log(bar); //undefined
//console.log(baz); // baz is not defined
foo();
function foo() {
   console.log('Hola!'); 
}
var bar = 1;
baz = 2;


//EJERCICIO 03
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); //Franco

//EJERCICIO 04
var instructor = 'Tony';
console.log(instructor); //Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); //Franco
   }
})();
console.log(instructor); //Tony

//EJERCICIO 05
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); // The Flash
   console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); //Franco

//Coerción de Datos
//EJERCICIO 06
console.log(6 / "3")              // 2
console.log("2" * "3")           // 6
console.log(4 + 5 + "px")        // 9px
console.log("$" + 4 + 5)         //$45
console.log("4" - 2)             // 2
console.log("4px" - 2)           //NAN
console.log(7 / 0)               //infinity
console.log({}[0])               //undefined
console.log(parseInt("09"))      // 9
console.log(5 && 2)              // 2
console.log(2 && 5)              // 5
console.log(5 || 0)              // 5
console.log(0 || 5)              // 5
console.log([3]+[3]-[10])        // 23
console.log(3>2>1)               // false
console.log([] == ![])           // true

// Hoisting
//EJERCICIO 07
function test() {
   console.log(a); // undef
   console.log(foo()); // 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();

//EJERCICIO 08
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

console.log(getFood(false)); // undef

//THIS
//EJERCICIO 09
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); //Aurelio De Rosa

var test = obj.prop.getFullname;

console.log(test()); // undefined

//EVENT LOOP
//EJERCICIO 10
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing(); // 1,4,3,2

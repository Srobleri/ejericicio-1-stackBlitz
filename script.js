// En este ejercicio deberéis crear un array de objetos a partir de la siguiente lista de usuarios:
//  * name: usuario1, country: spain, money: 199, premiumAccount: true
//  * name: usuario2, country: france, money: 0, premiumAccount: false
//  * name: usuario3, country: spain, money: 537, premiumAccount: false
//  * name: usuario4, country: italy, money: 1004, premiumAccount: true
//  * name: usuario5, country: spain, money: 250, premiumAccount: false
//  * name: usuario6, country: ireland, money: 799, premiumAccount: true
//  * name: usuario7, country: spain, money: 3345, premiumAccount: false

// Este array de usuarios debe generarse en una función llamada "createUsers". Al generar el array hay que asignarlo a una variable que haya sido declarada globalmente fuera de la función.

// Después de crear el array, deberéis realizar un filtrado empleando el método del objeto "Array", "filter". NO HACE FALTA USAR FILTER, SE PUEDE RECORRER CON CUALQUIER BUCLE
// Este filtrado deberá generar otro array con los usuarios que sean de españa y que tengan más de 200 euros.
// El filtrado se realizará desde una función llamada "filterUsers" que recibirá por parámetros la lista de usuarios y devolverá el array filtrado.
// Las dos últimas instrucciones de la función "onLoad" deben ser dos console.log para mostrar los dos arrays.
// Utilizad constantes siempre que sea posible.
// Suerte!

window.addEventListener("load", onLoad);

function createUsers() {
  var usuario1 = new Object();
  usuario1.name = "usuario1";
  usuario1.country = "spain";
  (usuario1.money = 199), (usuario1.premiumAccount = true);

  var usuario2 = new Object();
  usuario2.name = "usuario2";
  usuario2.country = "france";
  usuario2.money = 0;
  usuario2.premiumAccount = false;

  var usuario3 = new Object();
  usuario3.name = "usuario3";
  usuario3.country = "spain";
  usuario3.money = 537;
  usuario3.premiumAccount = false;

  var usuario4 = new Object();
  usuario4.name = "usuario4";
  usuario4.country = "italy";
  usuario4.money = 1004;
  usuario4.premiumAccount = true;

  var usuario5 = new Object();
  usuario5.name = "usuario5";
  usuario5.country = "spain";
  usuario5.money = 250;
  usuario5.premiumAccount = false;

  var usuario6 = new Object();
  usuario6.name = "usuario6";
  usuario6.country = "ireland";
  usuario6.money = 799;
  usuario6.premiumAccount = true;

  var usuario7 = new Object();
  usuario7.name = "usuario7";
  usuario7.country = "spain";
  usuario7.money = 3345;
  usuario7.premiumAccount = false;

  let users = [
    usuario1,
    usuario2,
    usuario3,
    usuario4,
    usuario5,
    usuario6,
    usuario7
  ];
  return users;
}

function filterUsers(arrayUsersSF) {
  let usersCF = new Array;
  var j=0;
  for (var i = 0; i < arrayUsersSF.length; i++) {
    if (users[i].money > 200) {
      usersCF.push(users[i]);
    }
  }
  return usersCF;
}

var users = createUsers();

function onLoad() {
  console.log("Hi");
  for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
  }

  users = filterUsers(users);
    console.log(users);
}

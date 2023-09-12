
const pizzas = [
    { id: 1 , nombre: " pizza triple queso", valor: 1200 , ingredientes:"queso muzzarela,queso cremoso,queso roquefor" },
    { id: 2 ,nombre:  " pizza con albaca", valor: 700 ,ingredientes:"queso muzzarela,albaca,aceitunas negras" },
    { id: 3 , nombre:  " pizza especial", valor: 300,ingredientes:"queso muzzarela,Huevos,paleta,morron" }
  ];



/*c)*/
  console.log("Listado de Pizzas:");
 for (let i = 0; i < pizzas.length; i++) {
  const pizza = pizzas[i];
  console.log(`
   ${pizza.nombre} - Precio: $${pizza.valor}`);}


/*a)  Las pizzas que tengan un id impar.*/
  for (let i = 0; i < pizzas.length; i++) {
    
    const pizza = pizzas[i];
    if (pizza.id  % 2 !== 0){
      console.log (" pizza con id inpar ")
      
      console.log(`Pizza ${pizza.id}: ${pizza.nombre} - Precio: $${pizza.valor} Ingredientes: ${pizza.ingredientes}`);}
      ;}
  


/*b)*/
for (let i = 0; i < pizzas.length; i++) {
  const pizza = pizzas[i];
  if (pizza.valor  < 600){
    console.log ("Las pizzas con precio menor a 600 son ")
    console.log(` ${pizza.nombre} - Precio: $${pizza.valor} Ingredientes: ${pizza.ingredientes}`);}
    ;}

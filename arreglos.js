let personas = []; //Arreglo vacio

let verduras = ['Lechuga','Tomate','Cebolla','Jitomate','Papa','Pimiento'];//Arreglo con datos

console.log(verduras[2]);

console.log(verduras.lenght);

for(let indice = 0; indice < verduras.lenght; indice++){
    console.log(verduras[indice]);
}

let personas2 = []

personas2.push('Ana');
personas2.push('Diego');
personas2.push('Liset');
personas2.push('Marcela');

console.log(personas2);

personas2.pop();//Elimina el ultimo elemento del arreglo

console.log(personas2);

personas2.unshift('Alex'); //Agregando un elemento al inicio de mi arreglo
personas2.unshift('Yolanda');
console.log(personas2);

personas2.shift();//Elimina el primer elemento de mi arreglo
console.log(personas2);

personas2[1] = 'Monica'; //Modificando un elemento del arreglo
console.log(personas2);

let suma = 0; let numero = 1; 
while (suma < 5) { suma += numero; numero++; } console.log(suma);
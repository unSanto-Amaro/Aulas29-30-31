//Unidimensionais
//Podemos criar vetores assim:

const num1 = new Array(30,-1,5,3,121);

//Ou podemos fazer:
const num2 = [-2,40,16,111,33,64];

console.log(num1)
console.log(num2)

//Acessando elementos diversos dos arrays

console.log(`primeiro elemneto de num1: ${num1[0]}`)
console.log(num2[0])

//Acesse o terceiro elemento de num1
console.log(num1[2])
//Acesse o quinto elemento de num2
console.log(num2[4])

console.log(num1[0] + num1[1])

//Arrays Bidimensionais
console.clear();

const matrix = [
    ['Banana', "Maçã", 'Pêra'],
    ['Laranja', true, 1],
    [null, "Uva", -350],
];

console.log(matrix)
console.log(matrix[0])
console.log(matrix[0][1])
console.clear();

//Alterar um valor do array
let moedas = ['Real', 'Dólar', 'Coroa', 'Peso'];

console.log(moedas);
moedas[1] = 'Yen';
console.log(moedas);

let matrix2 = [
    [1,2,3],
    [4,5,6],
]

matrix2[0][1] = 10;
console.log(matrix2);

//tamanho de arrays
let vetor = [0,1,2,3,4];
console.log(vetor.length);

//Remover e/ou inserir elementos
//pop() <- remover ultimo 
console.clear();
const frutas = ["Laranja", "Banana", "Manga"];
let x = frutas.pop()

console.log(frutas)
console.log(x)

//shift <- remover o primeiro
let y = frutas.shift()
console.log(frutas);

//delete <- remove qualquer um
const veiculos = ["Carro", "barco", "moto"]
delete  veiculos[1];
console.log(veiculos);

let z = veiculos.push("Avião")
console.log(veiculos)

veiculos[1] = "matheus"
console.log(veiculos)
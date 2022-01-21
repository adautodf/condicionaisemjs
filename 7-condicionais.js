console.log(`Trabalhando com condicionais`);

const listaDeDestinos = displayedColumns = [
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
    'Fortaleza',
    'Curitiba',
];

const idadeComprador = 15;
const estaAcompanhada = false;

console.log("Destinos disponíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(0, 1); //removendo item
} else if (estaAcompanhada) {
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(0, 1); //removendo item
} else {
    console.log("Não será possível efetuar a compra devido ao comprador ser Menor de idade ou está Desacompanhado");
}

console.log(listaDeDestinos);

// Informações sobre o Comprador
console.log(idadeComprador >= 18 ? 'Comprador é maior de idade' : 'comprador menor de idade' )
console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador == 18);


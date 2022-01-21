console.log(`Trabalhando com condicionais`);

const listaDeDestinos = displayedColumns = [
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
    'Fortaleza',
    'Curitiba',
];

const idadeComprador = 18;
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
    console.log("Não é maior de Idade e não posso vender");
}

console.log(listaDeDestinos);

// Informações sobre o Comprador
console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador == 18);


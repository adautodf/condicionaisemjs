console.log(`Trabalhando com condicionais`);

const listaDeDestinos = displayedColumns = [
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
    'Fortaleza',
    'Curitiba',
];

const idadeComprador = 17;
const estaAcompanhada = true;
var temPassagemComprada;

console.log("Destinos disponíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    temPassagemComprada = true;
    console.log("Seu destino foi selecionado com sucesso");
    listaDeDestinos.splice(0, 1); //removendo item
} else {
    console.log("Não será possível efetuar a compra devido ao comprador ser Menor de idade e não estar acompanhado");
    temPassagemComprada = false;
}

console.log(listaDeDestinos);

// Informações sobre o Comprador
console.log(idadeComprador >= 18 ? 'Comprador é maior de idade' : 'comprador menor de idade' )
//console.log(idadeComprador > 18);
//console.log(idadeComprador < 18);
//console.log(idadeComprador >= 18);
//console.log(idadeComprador <= 18);
//console.log(idadeComprador == 18);

console.log("Embarque:  \n")
if(temPassagemComprada && (idadeComprador >=18 || estaAcompanhada)) { 
    console.log("Boa viagem!");
}else{
    console.log("Você não pode embarcar");
}
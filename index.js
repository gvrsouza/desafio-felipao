//declaracao e leitura das variaveis
let readlineSync = require('readline-sync');
let nomeHeroi = readlineSync.question("Ola herói, qual o seu nome? ");
let exp = parseFloat(readlineSync.question("Informe sua quantida de experiência (XP) no jogo: "));
let nivel;

//estruturas de decisão 
if(exp <= 1000)
{
   nivel = "Ferro";
}
if (exp >1000 && exp <=2000) {
    nivel = "Bronze";
}
if (exp >2000 && exp <=5000) {
    nivel = "Prata";
}
if (exp >5000 && exp <=7000) {
    nivel = "Ouro";
}
if (exp >7000 && exp <=8000) {
    nivel = "Platina";
}
if (exp >8000 && exp <=9000) {
    nivel = "Ascendente";
}
if (exp >9000 && exp <=10000) {
    nivel = "Imortal";
}
if (exp >10000){
    nivel = "Radiante";
}

//mensagem final ao jogador
console.log("O Herói de nome "+ nomeHeroi + " está no nível de "+ nivel);
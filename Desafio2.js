let nomeDoJogador = "luskito"
let vitorias = 32;
let derrotas = 17;
let nivel;


if(vitorias <= 10) nivel = "Ferro";
if(vitorias > 10 && vitorias <= 20) nivel = "Bronze";
if(vitorias > 20 && vitorias <= 50) nivel = "Prata";
if(vitorias > 50 && vitorias <= 80) nivel = "Ouro";
if(vitorias > 80 && vitorias <= 90) nivel = "Diamante";
if(vitorias > 90 && vitorias <= 100) nivel = "Lendário";
if(vitorias > 100) nivel = "Imortal";

console.log("O Herói tem de saldo de " + vitorias - derrotas+  " está no nível de " +  nivel );

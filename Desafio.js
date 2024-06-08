let nomeDoJogador = "luskito"
let XP = 7655;
let nivel;


if(XP <= 1.000) nivel = "Ferro";
if(XP > 1000 && XP <= 2000) nivel = "Bronze";
if(XP > 2000 && XP <= 5000) nivel = "Prata";
if(XP > 5000 && XP <= 7000) nivel = "Ouro";
if(XP > 7000 && XP <= 8000) nivel = "Platina";
if(XP > 8000 && XP <= 9000) nivel = "Ascendente";
if(XP > 9000 && XP <= 10000) nivel = "Imortal";
if(XP > 10000) nivel = "Radiante";

console.log("O Herói de nome " + nomeDoJogador+  " está no nível de " +  nivel );
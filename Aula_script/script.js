
let data = new Date()
//Printar no console
console.log(data)
document.write(data)


//Usando let para atribuir à variável data1 a função new Date().getDate() para pegar a data 
let data1 = new Date().getDate()
//Pula linha
document.write("<br>")
//Printa var data1.
document.write(data1)

//Pega o Mês.
let data2 = new Date().getMonth()+1;
//Utilizando getMonth para pegar o Mês.
document.write("<br>")
document.write(data2)
document.write("<br>")

//Pega o Ano.
let data3 = new Date().getFullYear()

document.write(data3)

//{} É sempre objeto !!


//Pegando o dia atual de um array.
let data4 = new Date()
let diaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', "Sexta", 'Sábado']//Array, (lista), de dias da semana.
document.write("<br>")
document.write(diaSemana[data4.getDay()+1]);//+1 Acrescenta um dia ou acrescente mais um elemento, ou o próximo elemento de um objeto.


//Padrão Americano.
let data5 = new Date();
document.write("<br>")
document.write(data5.toDateString());

//Padrão navegador.
let data6 = new Date();
document.write("<br>")
document.write(data6.toLocaleDateString())

//Criando a formatação completa.

let data7 = new Date()
document.write("<br>")
let Dia = ('0' + data7.getDate()).slice(-2)
let mes = data7.getMonth();
let Meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
let ano = data.getFullYear();
document.write("<br>")
document.write(Dia + ' de ' + Meses[mes] + ' de ' +ano);
document.write("<br>")

//Pegando hora.
document.write("<br>")
let horas = new Date();
document.write(('0' + horas.getHours()).slice(-2), ' h : ');

//Pegando os minutos.
let minutos = new Date();
document.write(('0' + minutos.getMinutes()).slice(-2)+ ' min: ');

//Pegando os segundos.
let segundos = new Date();
document.write(('0' + segundos.getSeconds()).slice(-2), ' sec ');

//manipulando datas.
let horas1 = new Date()
document.write(horas1.getHours())
document.write("<br>")
horas1.setHours(horas1.getHours()+4)
document.write("<br>")
document.write()(horas1.getHours())
document.write("<br>")

//FUNÇÕES SETTIMEOUT E SETINTERVAL.

function BemVindo(){
    alert("Olá, Seja bem vindo")
}
//Executa uma vez apenas depois de 3 segundos por exemplo.
setTimeout(BemVindo, 3000)

function tempo(){
    let relogio = document.querySelector("#div1")
    let hora = new Date()
    relogio.innerHTML = (hora.toLocaleString().slice-8)
}
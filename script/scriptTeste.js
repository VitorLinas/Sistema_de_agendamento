// TESTAR FORMA MAIS LIMPA DE CÓDIGO E OUTRAS FUNCIONALIDADES NESSE SCRIPT

let agendamento = document.getElementById("containerDeAgendamento");
let mensagemBody = document.getElementById("bodySemMarcação");

const input1Clean = document.querySelector('#input1');
const input2Clean = document.querySelector('#input2');
const input3Clean = document.querySelector('#input3');
const input4Clean = document.querySelector('#input4');
const input5Clean = document.querySelector('#input5');
const input6Clean = document.querySelector('#input6');

function add(){
    agendamento.style.display ="block"; 
}

function x(){
    agendamento.style.display ="none";
}

function adicionar() {
    mensagemBody.style.display = "none";
    agendamento.style.display = "none";
    criarCard();
}

function criarCard(cardText) {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
    let input4 = document.getElementById("input4").value;
    let input5 = document.getElementById("input5").value;
    let input6 = document.getElementById("input6").value;
    
    // console.log(cardText);

    if( input1 == '' || input2 =='' || input3 =='' || input4 =='' || input5 =='' || input6 ==''){
        window.alert("Preencha todos os campos!");
        agendamento.style.display = "block";

    }else{
        
    const information = {
        cliente: `${input1}`,
        dia: `${input2}`,
        horarioInicio: `${input3}`,
        horarioFim: `${input4}`,
        servico: `${input5}`,
        observacao: `${input6}`,
    }


    console.log(information);
    listarCard(information);
    } 
}

function listarCard(information) {

    const{cliente, dia, horarioInicio, horarioFim, servico, observacao} = information;
    let localizacaoCard = document.getElementById("localizacaoCard");

    let div = document.createElement("div");
    div.classList.add("cardDeAgendamento");
   
    let div2 = document.createElement("div");
    
    let p1 = document.createElement("p");
    p1.innerText = cliente;

    let p2 = document.createElement("p");
    p2.innerText = dia;

    let p3 = document.createElement("p");
    p3.classList.add("horario");
    p3.innerText = `${horarioInicio} a ${ horarioFim}`
  
    let h2 = document.createElement("h2");
    h2.innerText = servico;
 
    let obs = document.createElement("p");
    obs.classList.add("obs");
    obs.innerText = observacao;
    
    localizacaoCard.appendChild(div)
    div.appendChild(div2);
    div2.appendChild(p1);
    div2.appendChild(p2);
    div2.appendChild(p3);
    div.appendChild(h2);
    div.appendChild(obs); 


   input1Clean.value = '';
   input2Clean.value = '';
   input3Clean.value = '';
   input4Clean.value = '';
   input5Clean.value = '';
   input6Clean.value = '';
}

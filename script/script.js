let agendamento = document.getElementById("containerDeAgendamento");
let mensagemBody = document.getElementById("bodySemMarcação");

const inputsI = document.querySelector('#input1');
const inputsII = document.querySelector('#input2');
const inputsIII = document.querySelector('#input3');
const inputsIV = document.querySelector('#input4');
const inputsX = document.querySelector('#input5');
const inputsXI = document.querySelector('#input6');

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
    // pegarDados();
    

}

function criarCard(cardText) {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
    let input4 = document.getElementById("input4").value;
    let input5 = document.getElementById("input5").value;
    let input6 = document.getElementById("input6").value;
    console.log(cardText);

    if( input1 == '' || input2 =='' || input3 =='' || input4 =='' || input5 =='' || input6 ==''){
        window.alert("Preencha todos os campos!");
        agendamento.style.display = "block";
        // mensagemBody.style.display = "block";

    }else{
    const information = {
        cliente: `${input1}`,
        dia: `${input2}`,
        horarioInicio: `${input3}`,
        horarioFim: `${input4}`,
        servico: `${input5}`,
        observacao: `${input6}`,
    }

    

    // information.cliente = '';


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


   inputsI.value = '';
   inputsII.value = '';
   inputsIII.value = '';
   inputsIV.value = '';
   inputsX.value = '';
   inputsXI.value = '';


}





// COISAS PARA IMPLEMENTAR NO PROJETO:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// * ORDEM DO CARD DE ACORDO COM O HÓRARIO E DIA (DESTACAR O QUE SERA ATENDIDO)

// * OPÇÃO PARA APAGAR OU ALTERAR O CONTEÚDO DO CARD

// * LISTA COM TODAS AS INFORMAÇÕES QUE O USÚARIO PRECISA SABER PARA UTILIZA-LO

// * PRÉ PROGAMAR SERVIÇOS QUE SÃO PRESTADOS PARA NÃO TER QUE DIGITA-LO TODA A VEZ

// * OBSERVAÇÃO NÃO SER OBRIGARTÓRIO. É CASO NÃO TENHA APARECER UMA MENSAGEM DE SEM OBSERVAÇÃO

// * NOTIFICAR E DESTACAR QUANDO DER O HORÁRIO DE ATENDIMENTO, DANDO OPÇÃO DE CANCELAR OU ADIAR

// * FORMA DE COLOCAR SERVIÇOS COMO CONCLUIDOS E ESTES SERVIÇOS IREM PARA UMA LISTA PARA O USÚARIO TER ACESSO 

// * OPÇÃO DE LOGIN COM TODAS INFORMAÇÕES DO USÚARIO

// * PENSAR NA MELHOR FORMA DE MONETIZAÇÃO (VENDENDO O ARQUIVO DO CÓDIGO, PUBLICANDO OU COM PLANO PAGO)

// * PENSAR NA MUDANÇA DO VISUAL DO CARD 











// Para desfazer uma ação, pressione Ctrl + Z. Para refazer uma ação desfeita, pressione Ctrl + Y.
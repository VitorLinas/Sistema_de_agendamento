const agendamento = document.getElementById("containerDeAgendamento");
const mensagemBody = document.getElementById("bodySemMarcação");

const input1Clean = document.querySelector('#input1');
const input2Clean = document.querySelector('#input2');
const input3Clean = document.querySelector('#input3');          // PARA LIMPAR
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

function criarCard() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
    let input4 = document.getElementById("input4").value;          // PARA CRIAR
    let input5 = document.getElementById("input5").value;
    let input6 = document.getElementById("input6").value;

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

    listarCard(information);

    } 
}






function listarCard(information) {
   
    // soma();



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

    // console.log(div)
    




    div.ondblclick = function(){
        let cancelar = document.getElementById("cancelar");
        let sim = document.getElementById("sim");

        cancelar. addEventListener("click", function(event) {
            certificacaoDeExclusao.style.display="none";
        })


        sim. addEventListener("click", function() {
           
            certificacaoDeExclusao.style.display="none";
            div.remove();
            // valor--;
        })


        let certificacaoDeExclusao = document.getElementById("certificacaoDeExclusao");   
        certificacaoDeExclusao.style.display="block";

    }   

    

    // var element =  document.querySelector(".cardDeAgendamento");
    // if (typeof(element) != 'undefined' && element != null)
    // {
    //     window.alert("existe")
    // }else{
    //     window.alert("não existe")
    // }
    // console.log(div);
}





// let valor = 0;
// function soma() {
//     valor++;
//     console.log(valor);
// }

//     var myElement = document.querySelector(".cardDeAgendamento")

// if(!myElement.parentNode)
// {
//     window.alert("não existe")
// }
// else
// {
//     window.alert("existe")
// }

//     console.log(div);
// }










// COISAS PARA IMPLEMENTAR NO PROJETO:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// * ARRUMAR FORMA DE APAGAR CARD (DOIS CLICKS)          OK!

// * ORDEM DO CARD DE ACORDO COM O HÓRARIO E DIA (DESTACAR O QUE SERA ATENDIDO) 

// * LISTA COM TODAS AS INFORMAÇÕES QUE O USÚARIO PRECISA SABER PARA UTILIZA-LO

// * PRÉ PROGAMAR SERVIÇOS QUE SÃO PRESTADOS PARA NÃO TER QUE DIGITA-LO TODA A VEZ

// * OBSERVAÇÃO NÃO SER OBRIGARTÓRIO. É CASO NÃO TENHA APARECER UMA MENSAGEM DE SEM OBSERVAÇÃO

// * NOTIFICAR E DESTACAR QUANDO DER O HORÁRIO DE ATENDIMENTO, DANDO OPÇÃO DE CANCELAR OU ADIAR

// * FORMA DE COLOCAR SERVIÇOS COMO CONCLUIDOS E ESTES SERVIÇOS IREM PARA UMA LISTA PARA O USÚARIO TER ACESSO 

// * OPÇÃO DE LOGIN COM TODAS INFORMAÇÕES DO USÚARIO

// * PENSAR NA MELHOR FORMA DE MONETIZAÇÃO (VENDENDO O ARQUIVO DO CÓDIGO, PUBLICANDO OU COM PLANO PAGO)

// * PENSAR NA MUDANÇA DO VISUAL DO CARD 











// Para desfazer uma ação, pressione Ctrl + Z. Para refazer uma ação desfeita, pressione Ctrl + Y.
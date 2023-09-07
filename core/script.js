const imagens = ["imgs/img1.jpg","imgs/img2.jpg","imgs/img3.jpg"]
let id_intervalo
    , index = null
    , imagem = document.getElementById('imagem')
;


function inicializaContador(){
    let contador = document.getElementById('contador')
        , tempo_deduzido = 1000
        , data_casamento = new Date(2023, 11, 16)
        , data_ate_casamento
        , data_formatada
    ;


    this.contador(contador, data_casamento, tempo_deduzido);
    
}

function contador(contador, data_casamento, tempo_deduzido){

    let data_atual = new Date()
        , data_casamento_milisegundos = data_casamento.getTime()
        , data_atual_milisegundos = data_atual.getTime()
        , data_ate_casamento
        , data_formatada
    ;

    data_ate_casamento = data_casamento_milisegundos - data_atual_milisegundos;
    data_formatada = formataDataMilisegundos(data_ate_casamento);

    contador.innerText =
    `${data_formatada.ano}a ${data_formatada.mes}m ` +
    `${data_formatada.dia}d ${data_formatada.hora}h ` +
    `${data_formatada.minuto}min ${data_formatada.segundo}s`

    this.setInterval(() => { 
        data_atual = new Date();
        data_atual_milisegundos = data_atual.getTime();

        data_ate_casamento = data_casamento_milisegundos - data_atual_milisegundos;
        data_formatada = formataDataMilisegundos(data_ate_casamento);

        contador.innerText =
        `${data_formatada.ano}a ${data_formatada.mes}m ` +
        `${data_formatada.dia}d ${data_formatada.hora}h ` +
        `${data_formatada.minuto}min ${data_formatada.segundo}s`

    }, tempo_deduzido);

}

function formataDataMilisegundos(milisegundos){

    let ano,
        mes,
        dia,
        hora,
        minuto,
        segundo
        data_formatada = {}
    ;

    segundo = milisegundos / 1000;
    minuto = segundo / 60;
    hora = minuto / 60;
    dia = hora / 24;
    mes = dia / 31;
    ano = parseInt(mes / 12);

    mes = parseInt(mes % 12);
    dia = parseInt(dia % 30);
    hora = parseInt(hora % 24);
    minuto = parseInt(minuto % 60);
    segundo = parseInt(segundo % 60);
    
    
    data_formatada.segundo = segundo
    data_formatada.minuto = minuto;
    data_formatada.hora = hora;
    data_formatada.dia = dia;
    data_formatada.mes = mes;
    data_formatada.ano = ano;

    return data_formatada;
}

function carrossel(){
    let checkbox_carrosel = document.getElementById('carrossel')
    ;

    if(!checkbox_carrosel.hasOwnProperty('valor')){
        checkbox_carrosel.valor = true;
    }

    if(checkbox_carrosel.valor){
        this.personalizaCarrosel(checkbox_carrosel, 'background-color', 'rgb(213, 175, 235)');
        id_intervalo = this.setInterval(() => {
            this.trocaFoto();
        }, 3000);
        checkbox_carrosel.valor = false;

    }else{
        this.personalizaCarrosel(checkbox_carrosel, 'background-color', 'white');
        clearInterval(id_intervalo);
        checkbox_carrosel.valor = true;

    }
}

function personalizaCarrosel(elemento, propriedade, valor){
    elemento.style[propriedade] = valor;
}

function trocaFoto(){
    let index_inical = 1;
    if(index !== null){
        index++;
        if(index > 2){
            index = 0;
        }
        imagem.src = imagens[index];
    }else{
        imagem.src = imagens[index_inical];
        index = index_inical;
    }
    
}

function avancarImagem(){
    if(index === null){
        imagem.src = imagens[1]
        index = 1;
    }else{
        index++;
        if(index > 2){
            index = 0;
        }
        
        imagem.src = imagens[index];
        
    }

}

function voltarImagem(){
    if(index === null){
        imagem.src = imagens[2]
        index = 2;
    }else{
        index--;
        if(index < 0){
            index = 2;
        } 
        
        imagem.src = imagens[index];
        
    }
}
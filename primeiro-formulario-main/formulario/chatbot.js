let button = document.getElementById('botao-chat')

function chatbot() {

}

function modoNoturno(){
    var conteudoButton = button.textContent
     if(conteudoButton == 'Noturno'){
        fundo.style.background='black';
        texto.style.color='rgb(255, 255, 255)';
        titulo.style.color='rgb(255, 255, 255)';
        button.innerHTML = 'Claro';

    }else{
        fundo.style.background='rgb(255, 255, 255)';
        texto.style.color='black';
        titulo.style.color='black';
        button.innerHTML = 'Noturno';
        
    }
                
}

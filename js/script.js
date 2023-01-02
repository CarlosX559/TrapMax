function faq() {

    const pergunta = document.querySelectorAll(".faq");
    const resposta = document.querySelectorAll(".faq_text");
      
        for (let i = 0; i < pergunta.length; i++) {

            pergunta[i].addEventListener("click", () => {
               
                    
                    if ( pergunta[i].classList.contains('fechar') ) {
                        pergunta[i].classList.toggle('fechar');
                        resposta[i].classList.toggle('ativar');
                    } else {
                        pergunta[i].classList.add('fechar');
                        resposta[i].classList.add('ativar');
                    }

            });
            
        }

}

faq();
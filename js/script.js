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

function img_mobile() {
    let largura = window.innerWidth;
    if( largura <= 425 ) {
        document.querySelector(".slide_desktop_1").src = 'img/banner_1_mobile.png';
        document.querySelector(".slide_desktop_2").src = 'img/banner_2_mobile.png';
    }

}

window.addEventListener('load', img_mobile());


function menu(){
    $(".menu_opener").click(
        function(){
            
            $('.area_menu_mobile_total').css( 'display', '-webkit-flex' ).css( 'top', '120px' ).css( 'animation', 'move 1s ease' );
            setTimeout( ()=> {
                $('.menu_opener').css( 'display', 'none', 'important' );
                $('.menu_close').css( 'display', '-webkit-flex' );
            }, 600 );
        }  
    );

    $(".menu_close").click(
        function() {
            $('.area_menu_mobile_total').css( 'top', '-100%' ).css('animation', 'move 1s ease' );
            setTimeout( () => {
                if($('.area_menu_mobile_total').css('top', '-100%')) {
                    $('.area_menu_mobile_total').css('-webkit-flex', 'none', 'important');
                }
            }, 600);

            setTimeout( ()=> {
                $('.menu_opener').css( 'display', '-webkit-flex' );
                $('.menu_close').css( 'display', 'none', 'important' );
            }, 100 );
            
        }
        
    );
}
menu();
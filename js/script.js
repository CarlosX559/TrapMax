function faq() {

    const pergunta = document.querySelectorAll(".faq");
    const resposta = document.querySelectorAll(".faq_text");

    for (let i = 0; i < pergunta.length; i++) {

        pergunta[i].addEventListener("click", () => {


            if (pergunta[i].classList.contains('fechar')) {
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
    var largura = window.innerWidth;
    if (largura <= 425) {
        document.querySelector(".slide_desktop_1").src = 'img/banner_1_mobile.webp';
        document.querySelector(".slide_desktop_2").src = 'img/banner_2_mobile.webp';
    }

}

window.addEventListener('load', img_mobile());


function menu() {
    $(".menu_opener").click(
        function () {

            $('.area_menu_mobile_total').css('display', '-webkit-flex').css('top', '120px').css('animation', 'move 1s ease');
            setTimeout(() => {
                $('.menu_opener').css('display', 'none', 'important');
                $('.menu_close').css('display', '-webkit-flex');
            }, 600);
        }
    );

    $(".menu_close").click(
        function () {
            $('.area_menu_mobile_total').css('top', '-100%').css('animation', 'move 1s ease');
            setTimeout(() => {
                if ($('.area_menu_mobile_total').css('top', '-100%')) {
                    $('.area_menu_mobile_total').css('-webkit-flex', 'none', 'important');
                }
            }, 600);

            setTimeout(() => {
                $('.menu_opener').css('display', '-webkit-flex');
                $('.menu_close').css('display', 'none', 'important');
            }, 100);

        }

    );
}
menu();

function img() {
    $('.img_2_bg img').css('animation', '');
    $('.armadilha_cheia').css('animation', '');

    setInterval(() => {
        $('.img_2_bg img').css('animation', 'video 400ms ease-in').css('display', 'none');
        $('.armadilha_cheia').css('animation', 'video 400ms ease-in').css('display', 'flex');


        $('.armadilha_cheia').css('max-width', '500px');
    }, 8000);

    setInterval(() => {
        $('.img_2_bg img').css('animation', 'video 400ms ease-in').css('display', 'flex');
        $('.armadilha_cheia').css('animation', 'video 400ms ease-in').css('display', 'none');


        $('.img_2_bg img').css('max-width', '474px');
    }, 16000);

    $('.img_2_bg_mobile img').css('animation', '');

    setInterval(() => {
        $('.img_2_bg_mobile img').css('animation', 'video 400ms ease-in').css('display', 'none');
        $('.armadilha_cheia_mobile').css('animation', 'video 400ms ease-in').css('display', 'flex');
        

        /*var largura = window.innerWidth;
        if (largura <= 425) {
            $('.armadilha_cheia_mobile').css('width', '300px');
            $('.img_largura_mobile').css('max-width', '320px');
        }*/

    }, 8000);

    setInterval(() => {
        $('.img_2_bg_mobile img').css('animation', 'video 400ms ease-in').css('display', 'flex');
        $('.armadilha_cheia_mobile').css('animation', 'video 400ms ease-in').css('display', 'none');
        /*
        var largura = window.innerWidth;
        if (largura <= 425) {
            $('.armadilha_cheia_mobile').css('width', '320px');
        }*/
    }, 16000);


}
img();

var min_u = 10;
var max_u = 30;



function getRandomArbitrary() {
    let number_unidades_1 = Math.random() * (max_u - min_u) + min_u;
    let number_unidades_2 = Math.random() * (max_u - min_u) + min_u;
    let number_kits_4 = 4;
    let number_kits_6 = 6;

    //Primeiro float comment
    $('.area_float_buy').css('animation', '');
    setTimeout(() => {
        $('.area_float_buy').css('display', 'flex').css('animation', 'comment 400ms ease-in');
        document.querySelector('.float_buy h2').innerHTML = "João comprou um kit de " + number_kits_4 + " unidades. Restam " + parseInt(number_unidades_1) + " unidades.";
    }, 120000);

    setTimeout(() => {
        $('.area_float_buy').css('display', 'none');
    }, 125000);
    //Segundo float comment
    $('.area_float_buy').css('animation', '');
    setTimeout(() => {
        $('.area_float_buy').css('display', 'flex').css('animation', 'comment 400ms ease-in');
        document.querySelector('.float_buy h2').innerHTML = "Fernanda comprou um kit de " + number_kits_6 + " unidades. Restam " + parseInt(number_unidades_2) + " unidades.";
    }, 240000);

    setTimeout(() => {
        $('.area_float_buy').css('display', 'none');
    }, 245000);

    //Terceiro float comment
    $('.area_float_buy').css('animation', '');
    setTimeout(() => {
        $('.area_float_buy').css('display', 'flex').css('animation', 'comment 400ms ease-in');
        document.querySelector('.float_buy h2').innerHTML = "Roberto comprou um kit de " + number_kits_6 + " unidades. Restam " + parseInt(number_unidades_1) + " unidades.";
    }, 360000);

    setTimeout(() => {
        $('.area_float_buy').css('display', 'none');
    }, 365000);

    //Quarto float comment
    $('.area_float_buy').css('animation', '');
    setTimeout(() => {
        $('.area_float_buy').css('display', 'flex').css('animation', 'comment 400ms ease-in');
        document.querySelector('.float_buy h2').innerHTML = "Jorge comprou um kit de " + number_kits_4 + " unidades. Restam " + parseInt(number_unidades_2) + " unidades.";
    }, 480000);

    setTimeout(() => {
        $('.area_float_buy').css('display', 'none');
    }, 485000);

    //Quinto float comment
    $('.area_float_buy').css('animation', '');
    setTimeout(() => {
        $('.area_float_buy').css('display', 'flex').css('animation', 'comment 400ms ease-in');
        document.querySelector('.float_buy h2').innerHTML = "Patrícia comprou um kit de " + number_kits_4 + " unidades. Restam " + parseInt(number_unidades_1) + " unidades.";
    }, 600000);

    setTimeout(() => {
        $('.area_float_buy').css('display', 'none');
    }, 650000);


    //document.querySelector('.float_buy h2').innerHTML = "João comprou um kit de "+ number_kits_6 +" unidades. Restam " + parseInt(number_unidades) + " unidades."; 
}

getRandomArbitrary();

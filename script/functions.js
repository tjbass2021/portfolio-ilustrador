$(document).ready(function(){

    let count = false;

    $('.eu').mouseover(function(){
        if(count === false){
            $('.balao').addClass('d-block');
            count = true;
        };
        
        
    }).mouseout(function(){
        if(count === true){
            $('.balao').removeClass('d-block');
            count = false;
        };
    })
})
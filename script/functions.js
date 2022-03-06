$(document).ready(function(){

    let count = false;
    let countIcons = false;
    let countComics = false;

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

    $('.icones img').mouseover(function(){
        if(countIcons === false){
            $(this).addClass('icones-invert');
            countIcons = true;
        }
    }).mouseout(function(){
        if(countIcons === true){
            $(this).removeClass('icones-invert');
            countIcons = false;
        }
    })

    $('.comics').on('click', function(){
        if(countComics === true){
            $(this).addClass('bg-aquamarine');
            $('.ilustras').removeClass('bg-aquamarine');
            $('.quadrinhos').addClass('d-flex');
            $('.quadrinhos').removeClass('d-none');
            $('.ilustracoes').addClass('d-none');
            $('.ilustracoes').removeClass('d-flex');
            countComics = false;
        }
    });

    $('.ilustras').on('click', function(){
        if(countComics === false){
            $(this).addClass('bg-aquamarine');
            $('.comics').removeClass('bg-aquamarine');
            $('.ilustracoes').removeClass('d-none');
            $('.ilustracoes').addClass('d-flex');
            
            $('.quadrinhos').addClass('d-none');
            $('.quadrinhos').removeClass('d-flex');
            countComics = true;

        }
    })

    // $('.quadrinhos figure img').on('click', function(){
    //     if(countComics === false){
    //         $(this).addClass('position-absolute');
    //         countComics = true;
    //     }
    // })

})
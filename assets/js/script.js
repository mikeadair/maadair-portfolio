function toggleMobileNav(){
    if($('#navbar').css('display') == 'block'){
        $('#navbar').css('display', 'none');
        $('#menu-icon').css('background-image','url("assets/img/mobile-btn-1.png")');
    }else{
        $('#navbar').css('display', 'block');
        $('#menu-icon').css('background-image','url("assets/img/mobile-btn-2.png")');
    }
}
function navClicked(){
    if($('#menu-icon').css('display') == 'block'){
        toggleMobileNav();
    }
}
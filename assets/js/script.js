function toggleMobileNav(){
    if($('#navbar').css('display') == 'block'){
        $('#navbar').css('display', 'none');
    }else{
        $('#navbar').css('display', 'block');
    }
}
function navClicked(){
    if($('#menu-icon').css('display') == 'block'){
        toggleMobileNav();
    }
}
$(document).ready(function(){
    $('.header_burger,.close_menu').click(function(event) {
        $('.katago,.back_mob_blaclout,.katago_mob_nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.sign_in,.close_login,.btn_registr,.btn_login').click(function(event) {
        $('.back_mob_blaclout,.login_register,.login_register_div').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.close_registr,.btn_registr,.btn_login').click(function(event) {
        $('.back_mob_blaclout,.register_login,.register_login_div').toggleClass('active');
        
    });
    
});
function showHeader(){
    $('#logo').fadeIn('slow')
            .animate({width: '100px'}, 'fast');

    $('#headerTitle').delay(600).fadeIn('slow');
}

function showPanel(){
    $('.panel').delay(1000).fadeIn('slow');
}

window.addEventListener('load', function() {
    console.log('Imagenes listas.');
    showHeader();
    showPanel();
});

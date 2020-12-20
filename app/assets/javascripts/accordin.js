$(document).on('turbolinks:load', function(){
    $('.accordin-button').click(function (){
        var idText = $(this).data('target')
        var textDom = $(idText)
        if (textDom.is(":visible")){
            textDom.hide('slow')
        } else {
            $('.paragraph').hide('slow')
            textDom.show('slow')
        }
    })
})
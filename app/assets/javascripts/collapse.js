$(document).on('turbolinks:load', function(){
    $('#alert-collapse').click(function (){
        $('#inner-text').toggle('slow')
    })
})
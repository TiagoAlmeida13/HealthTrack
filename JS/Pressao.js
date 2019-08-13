$(function(){

    $("#pressao-form").submit(function (e) {
        event.preventDefault()
    }) .validate({
        rules: {
            pressao:{
                required: true,
                number: true
            },
            batimento:{
                required: true,
                number: true
            }
            
        },
        submitHandler: function(form) {
            Swal.fire({
                position: 'center',
                type: 'success',
                title: 'Dados salvos com sucesso',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
})
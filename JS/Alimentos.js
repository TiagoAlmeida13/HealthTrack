$(function(){

    $("#alimento-form").submit(function (e) {
        event.preventDefault()
    }) .validate({
        rules: {
            comida:{
                required: true
            },
            eat:{
                required: true
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
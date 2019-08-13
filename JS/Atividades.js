$(function(){

    $("#exercicio-form").submit(function (e) {
        event.preventDefault()
    }) .validate({
        rules: {
            exercicio:{
                required: true,
                number: true
            },
            data:{
                required: true,
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
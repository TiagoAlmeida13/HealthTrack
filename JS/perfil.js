$(function(){

    $("#form-perfil").submit(function (event) {
        event.preventDefault()
    }) .validate({
        rules: {
            nome:{
                required: true,
            },
            email:{
                required: true,
                email: true
            },
            idade:{
                required: true,
                number: true
            },
            genero:{
                required: true
            },
            senha:{
                required: true, 
                equalTo: "#password"
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
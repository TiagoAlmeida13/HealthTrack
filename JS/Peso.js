$(function(){

    $("#peso-form").submit(function (e) {
        event.preventDefault()
    }) .validate({
        rules: {
            peso:{
                required: true,
                number: true
            },
            altura:{
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
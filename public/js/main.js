
/* js para pinterest --------------------*

 */

$(document).ready(function() {
    $('#medicos').pinterest_grid({
        no_columns: 4,
        padding_x: 10,
        padding_y: 10,
        margin_bottom: 50,
        single_column_breakpoint: 700
    });


    // Update Item
    // Para todos los elementos que tengan la intrucccion de abajo ejecuten lo siguiente
    $(".btn-update-item").on('click', function (e) {
        e.preventDefault();

        var id = $(this).data('id');
        var href = $(this).data('href');
        var quantity = $("#product_" + id).val();

        //Redireccionar
        window.location.href = href + "/" + quantity;
    });
});
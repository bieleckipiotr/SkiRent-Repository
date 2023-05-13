// Add to cart
$(document).on('click', '#add-button', function(e){
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: url_add,
        data: {
            productid: $('#add-button').val(),
            productqty: $('#select').val(),
            csrfmiddlewaretoken: window.CSRF_TOKEN,
            action: 'post'
        },
        success: function (json){
            document.getElementById("basket-qty").innerHTML = json.qty
        },
        error: function (xhr, errmsg, err){
            console.log(xhr)
        }
    })
})

// Delete Item
$(document).on('click', '#delete-button', function (e) {
    e.preventDefault();
    var prodid = $(this).data('index');
    $.ajax({
        type: 'POST',
        url: url_del,
        data: {
            productid: $(this).data('index'),
            csrfmiddlewaretoken: window.CSRF_TOKEN,
            action: 'post'
        },
        success: function (json) {
            $('.product-item[data-index="' + prodid + '"]').remove();
            document.getElementById("subtotal").innerHTML = json.subtotal;
            document.getElementById("basket-qty").innerHTML = json.qty
        },
        error: function (xhr, errmsg, err) {
        }
    });
})

// Update Item
$(document).on('click', '#update-button', function (e) {
    e.preventDefault();
    var prodid = $(this).data('index');
    $.ajax({
        type: 'POST',
        url: url_upd,
        data: {
            productid: $(this).data('index'),
            productqty: $('#select' + prodid + ' option:selected').text(),
            csrfmiddlewaretoken: window.CSRF_TOKEN,
            action: 'post'
        },
        success: function (json) {
            document.getElementById("basket-qty").innerHTML = json.qty
            document.getElementById("subtotal").innerHTML = json.subtotal
        },
        error: function (xhr, errmsg, err) {
        }
    });
})


$(document).ready(function(){
  $('.dropdown-button').on('click', function(){
    $('.nav-collapsible').toggle();
  });
});


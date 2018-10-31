$(document).ready(function(){

    var shoppingCart = JSON.parse(localStorage.getItem("localStored"));
    var itemNumber;
    var removeRow;

    if (shoppingCart == null){
            itemNumber = 0;
            $('#table').text('There is nothing in your cart.');
            $('.total_money').css('display','none');
            $('#total_price').css('display','none');
    } else {
        for (var i = shoppingCart.length - 1; i >= 0; i--) {
            var img = shoppingCart[i].img;
            var item = shoppingCart[i].item;
            var glazing = shoppingCart[i].glazing;
            var quantity = shoppingCart[i].quantity
            var price = shoppingCart[i].price;
            var x = shoppingCart[i].x;
            var pid = shoppingCart[i].pid;
            //itemNumber ++；
            updateCart(img,item,glazing,quantity,price,x, pid);
          //  console.log (price);
          //  console.log(x);
            updateTotalPrice(price);
            // assignIndex();
            //countItems(shoppingCart);
        }
    }
    // assigning index to each of the objects in the array
    function assignIndex(){
        var newShoppingCart = [].concat(shoppingCart);
        for (var i = 0 ; i < newShoppingCart.length; i++) {
            newShoppingCart[i].itemNumber = i;
        }
        console.log(newShoppingCart);
    }

    function updateCart(img,item,glazing,quantity,price,x,pid){
        const info ="<tr data-roll-pid='" + pid +  "'>\
            <td id='shopping_cart_img'><img class='row-roll-img' src='" + img + "' /></td>\
            <td>" + item + "</td>\
            <td>" + glazing + "</td>\
            <td>" + quantity +"</td>\
            <td id='shopping_price'>" + price + "</td>\
            <td id='remove_item' data-tag='remove_item' data-pid='" + pid +  "'>" + x + "</td>\
        </tr>"
        //console.log(info);
        $("#table tr:last").after(info);
        document.getElementById("dot_text").innerHTML = shoppingCart.length;
    }


    function updateTotalPrice(price){
        var totalPrice = 0.00;
        for (var i = shoppingCart.length - 1; i >= 0; i--) {
            totalPrice += shoppingCart[i].price;
            //console.log(shoppingCart[i].price);
        }
            //number(totalPrice).toFixed(2);
        document.getElementById("total_price").innerHTML = totalPrice;
    }

    //removing items
    $("[data-tag='remove_item']").click(function(e) {
        console.log('REMOVE ITEM CLICKED');
        console.log($(this).attr('data-pid'));
        var pid = $(this).attr('data-pid');
        if (pid) {
            // WRITE SHOPPING CART
            shoppingCart = shoppingCart.filter(x => x.pid !== pid);
            // WRITE STORAGE
            updateStorage(shoppingCart);
            updateTotalPrice(price);
            // REMOVE ROW
            $(`[data-roll-pid="${pid}"]`).remove();
        }
        document.getElementById("dot_text").innerHTML = shoppingCart.length;
    });

    }

    function updateStorage(shoppingCart){
        localStorage.setItem("localStored", JSON.stringify(shoppingCart));

});
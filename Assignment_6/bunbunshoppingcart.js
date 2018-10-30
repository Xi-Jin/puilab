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

    // function countItems(shoppingCart){
    //     var itemNumber = 0;
    //     for (var i = shoppingCart.length - 1; i >= 0; i--) {
    //         itemNumber ++;
    //         //console.log(itemNumber);
    //     }
    //     console.log(shoppingCart);
    // }


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
    /*
    $('#remove_item').click(function(){
        // console.log(shoppingCart);https://stackoverflow.com/questions/15097634/how-to-change-the-attr-and-id-of-a-button-after-clicking-using-jquery
        $(this).parent().attr('id','removed');
        //find removed line index from table
        var tableRow = document.getElementsByTagName("tr");
        var removeRow;
        for (var i = 0; i < shoppingCart.length ; i++) {
            console.log(i);
            
            if ($('[id]')=="removed"){
            removeRow = i;
            // test
            console.log(removeRow);
            }
        }
        // remove(removeRow);
        // updateStorage(shoppingCart);
        // updateTotalPrice(price);
    });
    */

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
    });


    function remove(index){
        shoppingCart.splice(index,1);
    }

    function updateStorage(shoppingCart){
        localStorage.setItem("localStored", JSON.stringify(shoppingCart));
        /*
        if (shoppingCart == null){
            itemNumber = 0;
            $('#table').text('There is nothing in your cart.')
            $('.total_money').css('display','none');
            $('#total_price').css('display','none');
        } else {
            for (var i = shoppingCart.length - 1; i >= 0; i--) {
                d.push(shoppingCart[i]);
                localStorage.setItem("localStored", JSON.stringify(d));
                } 
        }
                        */
    }
    // function updateStorage(shoppingCart){
    //     var d = JSON.parse(localStorage.getItem("localStored"));
    //     for (var i = shoppingCart.length - 1; i >= 0; i--) {
    //         if（shoppingCart == null) {
    //             shoppingCart[i].push(objToSave);
    //             localStorage.setItem("localStored", JSON.stringify(shoppingCart));
    //         } else {
    //             d.push(objToSave);
    //             localStorage.setItem("localStored", JSON.stringify(d));
    //         }
    //     }
    // }
        
        //localStorage.removeItem($(this));
        //updateCart(img,item,glazing,quantity,price,x);
        //updateTotalPrice(price);
});

$(document).ready(function() {

    var glazing;
    var shopping_cart = [];
    var img = $("#product_image")
    var item = $(".item_name").text();


    // window.alert("testing");
    console.log("hi testing");
    $('#none').click(function(){
        $(this).css("background-color", "#D8D8D8");
        $(this).siblings().css('background-color',"white");
        glazing = "none";

    });
    $('#sugar_milk').click(function(){
        $(this).css("background-color", "#D8D8D8");
        $(this).siblings().css('background-color',"white");
        $('#product_image').attr('src','assets/flavors/sugarmilk.jpg');
        glazing = "sugar_milk";
    });
    $('#vanilla_milk').click(function(){
        $(this).css("background-color", "#D8D8D8");
        $(this).siblings().css('background-color',"white");
        glazing = "vanilla_milk";
    });
    $('#double_choco').click(function(){
        $(this).css("background-color", "#D8D8D8");
        $(this).siblings().css('background-color',"white");
        glazing = "double_choco"
    });

    $(".add_cart_button").on("click", function() {
        console.log(glazing);
        console.log($('#quantity').val());
        saveStatusLocally();
    })

    function saveStatusLocally(){
        //grab the value of the text box
        var quantityToSave = quantity.value;
        var price = quantityToSave * 2;
        var objToSave = {img:img, item:item, glazing:glazing,quantity:quantityToSave, price:price};
        var d = localStorage.getItem(shopping_cart);
        if (d == null){
            shopping_cart.push(objToSave);
            localStorage.setItem("localStored",JSON.stringify(shopping_cart));
            console.log(shopping_cart);
        } else {
            shopping_cart.push(objToSave);
            localStorage.setItem("localStored",JSON.stringify(shopping_cart));
            console.log(shopping_cart)
        }



        // if ((quantityToSave == null)||(quantityToSave == "")){
        //     document.getElementById('feedback').innerHTML="Your cart is still empty.";
        // } else {
        //     var objToSave = {glazing:glazing,quantity:quantityToSave};
        //         console.log(JSON.stringify(objToSave));
        //     localStorage.setItem("database",JSON.stringify(objToSave));
        //     console.log (localStorage.getItem("database"));
        // }
    }

    //const template ='tr='
});

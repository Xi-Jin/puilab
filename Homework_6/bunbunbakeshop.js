$(document).ready(function(){
    //define global var
    var glazing;
    var shopping_cart = [];
    var img = $("#product_image");
    var item = $(".item_name").text();
    var d = JSON.parse(localStorage.getItem("localStored"));
    document.getElementById("dot_text").innerHTML = d.length;

    // glazing buttons
    $('#none').click(function(){
        $(this).css("background-color", "#D8D8D8");
        $(this).siblings().css('background-color',"white");
        $('#product_image').attr('src','assets/blueberry.png');
        glazing = "None";

    });
    $('#sugar_milk').click(function(){
        $(this).css("background-color", "#D8D8D8");
        $(this).siblings().css('background-color',"white");
        $('#product_image').attr('src','assets/flavors/sugarmilk.jpg');
        glazing = "Sugar Milk";
    });
    $('#vanilla_milk').click(function(){
        $(this).css("background-color", "#D8D8D8");
        $(this).siblings().css('background-color',"white");
        $('#product_image').attr('src','assets/flavors/vanilla.jpg');
        glazing = "Vanilla Milk";
    });
    $('#double_choco').click(function(){
        $(this).css("background-color", "#D8D8D8");
        $(this).siblings().css('background-color',"white");
        $('#product_image').attr('src','assets/flavors/double-choco.jpg');
        glazing = "Double Choco"
    });

    //add to cart button
    $(".add_cart_button").on("click", function() {
        // console.log(glazing);
        // console.log($('#quantity').val());
        saveStatusLocally();
    })

    function saveStatusLocally(){
        //grab the value of the text box
        var quantityToSave = $('#qty').val();
        var price = quantityToSave * 2;
        var x = x;
        x = "x";
        img = $("#product_image").attr('src');
        console.log(img);
        var objToSave = {
            img:img, item:item, glazing:glazing,quantity:quantityToSave, price:price, x:x, pid: 'roll_' + Math.floor(Math.random() * 10e6)
        };
        //var d = JSON.parse(localStorage.getItem("localStored"));
        //var key = d.length ++
        //console.log(key);
        if (d == null){
            shopping_cart.push(objToSave);
            localStorage.setItem("localStored", JSON.stringify(shopping_cart));
            console.log(shopping_cart);
            console.log(objToSave);

        } else {
            //console.log(d.length)
            d.push(objToSave);
            localStorage.setItem("localStored", JSON.stringify(d));
            //console.log(d);
            //console.log("ohno");
        }
        document.getElementById("dot_text").innerHTML = d.length;
    }
});


// var shopping cart=[]

// class Product {
// 	constructor(img, type, filling, color, price, quantity)
// 	{
// 		this.img=img,
// 		this.type=type,
// 		this.filling=filling,
// 		this.color=color,
// 		this.price=price,
// 		this.quantity=quantity

// class Cart {
//     constructor()
//     {
//         this.pillows = []
//     }
// }

//
// var type = {}
// var dataset = {}
// var typedata

// //on click, stores type of object into local storage as string


var storeData=[];


function getData(){
	if(JSON.parse(localStorage.getItem("cart"))){
		storeData=JSON.parse(localStorage.getItem("cart"));
	}

};

function createCartIcon(){

	if(getData!=null){
	  var cartTotal=0

	  for(var i=0; i<getData["quantity"].length; i++){
	    cartTotal+=getData["quantity"][i]*1;
	  }
	  $('.item h3').text(totalNum);
	  $('.carttotal').css('opacity',"1");
	}
};




$(document).ready(function(){

	getData();

	$(".cart_add").click(function(){

		var myFilling = $('input[name=filling]:checked').val();
		var typedata = $(this).text();

		localStorage.setItem("Type", JSON.stringify(typedata));

		var yellowQuantity = $('#yellow_number').val();
		var redQuantity = $('#red_number').val();
		var greyQuantity = $('#grey_number').val();
		var blueQuantity = $('#blue_number').val();

		var productType=$('.container-bottom2').attr('id')

		var myPillow={
			filling: myFilling,
	   	 	ptype: productType,
	   	 	yellow: yellowQuantity,
	   	 	red: redQuantity,
	   	 	grey: greyQuantity,
	   	 	blue: blueQuantity,

   	 	}
   	 	storeData.push(myPillow);
   	 	localStorage.setItem("cart", JSON.stringify(storeData));
   	 	console.log("storeData")
	});

	displayCart();	
});

//display cart
function displayCart(){
	for (i=0;i<storeData.length;i++){
		$("#cart_container").append("<div class='productImage' id="+storeData[i].ptype+"></div><div><p>"+storeData[i].ptype+"<br>"+storeData[i].filling+"<br>"+storeData[i].yellow+"<br>"+storeData[i].red+"<br>"+storeData[i].grey+"<br>"+storeData[i].blue+"</p></div>");
		// console.log("hello");
	}
}





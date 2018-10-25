//Katrina Garloff 

const numOfItems = $('.mini-cart-container').data('quantity');

const cartTotal = $( "td.order-value" )[0].innerText;

const images = [];

$("div.mini-cart-image").find("a").find("img").each(function(img, atr) {
  images.push('<img src="' + atr.src + '"/>');
})

window.onscroll = function(ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - (document.body.offsetHeight * .1)) {
        $("#overlay, #popup").addClass("active");
    }
};

function closePopup() {
  $("#overlay, #popup").removeClass("active");
}

$("body").append('<style>' +
  '#overlay {display: none; position: fixed; width: 100%; height: 100%; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0, 0.5); z-index: 999;} ' +

  '#overlay.active {display: block;}' +

  '#popup {display: none; position: fixed; background-color: rgb(255,255,255); left: 50%; top: 50%; transform: translate(-50%, -50%); padding: 20px;} ' +

  '#popup.active {display: block;}' +

  '#close-button {float: right; color: gray; font-size: 18px;}' +

  '.gray-border {display: flex; flex-wrap: wrap; border-top-style: solid; border-top-color: gray; border-top-width: 1px; border-bottom-style: solid; border-bottom-color: gray; border-bottom-width: 1px; margin: 20px;}' +

  '#go-to-cart {border-style: solid; border-width: 2px; padding: 5px; float: right;}</style>' +

'<div id="overlay">' +
  '<div id="popup">' +
    '<button id="close-button" onclick="closePopup()">X</button>'
    + numOfItems + ' items<br/>' +
    '<div class="gray-border">' + images.join("<br/>")  + '</div>' +
    'Cart Total: ' + cartTotal + '<br/>' +
      '<button onclick="location.href=`http://www.marmot.com/cart`" type="button" id="go-to-cart">GO TO CART</button>' +
  '</div>' +
'</div>')


$(document).ready(function() {
    const COCO = `http://localhost:3000/chocolate`;
    $.get(COCO, display)
    // console.log("hi");
})

function display(data){
  for (var i = 0; i < data.length; i++) {

    var price = data[i].price_lb;
    let fixed = price/100;
    $('.row').append(`<a href="show?id=${data[i].id}">${data[i].id}</a><br>`);
    $('.name').append(`<a href="show?id=${data[i].id}">${data[i].name}</a><br>`);
    $('.price').append(`$${fixed}<br>`);
    // $('.delicious').append(`${data[i].delicious_factor} <br>`);
  }
  $("#success").on('click', update)
    event.preventDefault();
}

function update(){
      var obj = {
        name: $('#name').val(),
        price_lb: $('#price').val(),
        type: $('#type').val(),
        delicious_factor: $('#deliciousness').val()
      }
$.post( "http://localhost:3000/chocolate", obj, function(result) {
  $.ajax({
  type: "POST",
  // url: `http://localhost:3000/client/show/${id}`,
  success: function(){
    console.log("yahoo its changed did!");
    window.location = "/client/displayall.html"
  },
  fail: function (){
    console.log("uh ohh, check yo syntax sukka");
  }
}, "json");
});
}

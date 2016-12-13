
$(document).ready(function() {
    const COCO = `http://localhost:3000/chocolate`;
    $.get(COCO, display)
    console.log("hi");
})
function display(data){
  for (var i = 0; i < data.length; i++) {
    console.log(data[i].id);
    var price = data[i].price_lb;
    let fixed = price/100;
    $('.row').append(`${data[i].id} <br>`);
    $('.name').append(`<a href="show?id=${data[i].id}">${data[i].name}</a><br>`);
    $('.price').append(`$${fixed} <br>`);
    // $('.delicious').append(`${data[i].delicious_factor} <br>`);
  }
}

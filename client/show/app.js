
$(document).ready(function() {
    const id = window.location.search.split('=')[1]
    const INDI = `http://localhost:3000/client/${id}`;
    $.get(INDI, display)
    console.log("hi");
})
console.log(window.location.search.split('=')[1]);

function display(data){
  console.log(data["0"]);
  var price = data["0"].price_lb;
  let fixed = price/100;
  $('.row').append(`${data["0"].id}`);
  $('.name').append(`${data["0"].name}`);
  $('.price').append(`$${fixed}`);
  $('.delicious').append(`${data["0"].delicious_factor}`);
}

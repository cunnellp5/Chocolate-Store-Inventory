
$(document).ready(function() {
    const id = window.location.search.split('=')[1];
    const INDI = `http://localhost:3000/client/${id}`;
    $.get(INDI, display)
    $('#put').hide();
})
console.log(window.location.search.split('=')[1]);

function display(data){
  var price = data["0"].price_lb;
  let fixed = price/100;
  $('.row').append(`${data["0"].id}`);
  $('.name').append(`${data["0"].name}`);
  $('.price').append(`$${fixed}`);
  $('.delicious').append(`${data["0"].delicious_factor}`);

  $("#edit1").on('click', edit1)
  $("#put").on('click', editor)
  $("#delete").on('click', del)
}

function del(){
  const id = window.location.search.split('=')[1]
  $.ajax({
    type: "delete",
    url: `http://localhost:3000/chocolate/${id}`,
    success: function(){
      console.log("yahoo its gone!");
      window.location = "/client/displayall.html"
    },
    fail: function (){
      console.log("uh ohh");
    }
  });
}

function edit1(){
  $('#edit1').hide();
  $('#put').show();
  $('#foot-hair').append(`
        <form class="" action="/chocolate" method="post">
            Name:
            <br>
            <input class="formula" id = "name" type="text" name="name" value="" placeholder="Truffle">
            <br><br>
            Price per lb:
            <br>
            <input class="formula" id = "price" type="text" name="price_lb" value="" placeholder="1099 in cents">
            <br><br>
            Type:
            <br>
            <input class="formula" id = "type" type="text" name="type" value="" placeholder="Milk or Dark?">
            <br><br>
            Deliciousness:
            <br>
            <input class="formula" id = "deliciousness" type="text" name="delicious_factor" value="" placeholder="Sooo Good!">
            <br><br>
        </form>
    `);
}


function editor(){
  console.log("anything");
  const id = window.location.search.split('=')[1]
  $.ajax({
    type: "put",
    url: `http://localhost:3000/client/show/${id}`,
    success: function(){
      console.log("yahoo its gone!");
      window.location = "/client/displayall.html"
    },
    // fail: function (){
    //   console.log("uh ohh");
    // }
  });
}

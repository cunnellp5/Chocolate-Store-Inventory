
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
                          Name:
                          <br>
                          <input class="formula" id = "name" type="success" name="name" value="" placeholder="Truffle" required>
                          <br><br>
                          Price per lb:
                          <br>
                          <input class="formula" id = "price" type="success" name="price_lb" value="" placeholder="1099 in cents" required>
                          <br><br>
                          Type:
                          <br>
                          <input class="formula" id = "type" type="success" name="type" value="" placeholder="Milk or Dark?" required>
                          <br><br>
                          Deliciousness:
                          <br>
                          <input class="formula" id = "deliciousness" type="success" name="delicious_factor" value="" placeholder="Sooo Good!" required>
                          <br><br>
                        `);
                  }

function editor(){

let newObj = {};
newObj.name = $('#name').val();
newObj.price_lb = $('#price').val();
newObj.type = $('#type').val();
newObj.delicious_factor = $('#deliciousness').val();

  const id = window.location.search.split('=')[1]
  console.log(id);

  $.ajax({
    type: "put",
    url: `http://localhost:3000/client/show/${id}`,
    data: newObj,
    success: function(message){
      if (message.message === 'nooo') {
        window.location.replace("400.html");
      } else {
      window.location = `/client/show/?id=${id}`
      }
    },
  });
}

function validateForm() {
    var x = document.forms["myForm"]["name"].value &&
            document.forms["myForm"]["price_lb"].value &&
            document.forms["myForm"]["type"].value &&
            document.forms["myForm"]["delicious_factor"].value;
    if (x == "") {
        alert("blanks must be filled ooot");
        return false;
    }
}
// $.post( "http://localhost:3000/chocolate", obj, function(result) {
//   console.log("anything");
//   const id = window.location.search.split('=')[1]
//   $.ajax({
//     type: "put",
//     url: `http://localhost:3000/client/show/${id}`,
//     success: function(){
//       console.log("yahoo its gone!");
//       window.location = "/client/displayall.html"
//     },
//     fail: function (){
//       console.log("uh ohh");
//     }
//   });
// });

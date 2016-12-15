
$(document).ready(function() {
    const id = window.location.search.split('=')[1];
    const INDI = `http://localhost:3000/client/${id}`;
    $.get(INDI, display)

})

// console.log(window.location.search.split('=')[1]);

function display(data){
  console.log(data);
  var price = data["0"].price_lb;
  let fixed = price/100;

  $("#edit1").on('click', edit1(data))
  $("#put").on('click', editor)
  $("#delete").on('click', del)
}

function edit1(data){

  $('#edit1').hide();
  $('#put').show();
  var price = data["0"].price_lb;
  let fixed = price/100;
  $('#foot-hair').append(`
                          Name:
                          <br>
                          <input class="formula" id = "name" type="success" name="name" value="${data["0"].name}" placeholder="Truffle" required>
                          <br><br>
                          Price per lb:
                          <br>
                          <input class="formula" id = "price" type="success" name="price_lb" value="$${fixed}" placeholder="1099 in cents" required>
                          <br><br>
                          Type:
                          <br>
                          <input class="formula" id = "type" type="success" name="type" value="${data["0"].type}" placeholder="Milk or Dark?" required>
                          <br><br>
                          Deliciousness:
                          <br>
                          <input class="formula" id = "deliciousness" type="success" name="delicious_factor" value="${data["0"].delicious_factor}" placeholder="Sooo Good!" required>
                          <br><br>
                        `);
                  }

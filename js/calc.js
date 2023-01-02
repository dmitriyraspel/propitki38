var calc4Title = document.querySelector('.calc4Title strong');

// calcStep3-1
var calc3_1 = document.querySelector('#calcStep3-1');
var calc3_1_button = calc3_1.querySelector('button.button');

calc3_1_button.addEventListener('click', calc2);

function calc2() {
  event.preventDefault();
  var input_width =  calc3_1.querySelector('input[name*="width"]').value;
  var input_height =  calc3_1.querySelector('input[name*="height"]').value;
  var select_amount = calc3_1.querySelector('select[name="amount"]').value;
  var p;
  var inputs_wood_type = calc3_1.querySelectorAll('input[name="wood-type1"]');

  for (let i = 0; i < inputs_wood_type.length; i++) {
    if (inputs_wood_type[i].checked) {
      var input_wood_type_val = inputs_wood_type[i].value;
    }
  }

  if (input_wood_type_val === "wood-type1") {
    p = 1;
  }
  if (input_wood_type_val === "wood-type2") {
    p = 1.2;
  }
  if (input_wood_type_val === "wood-type3") {
    p = 0.8;
  }

  var total = ( input_width * input_height * select_amount) / p;
  var totalText = Math.ceil(total) + " литров";

  calc4Title.innerHTML = totalText;

  scrollToTotal();
}

function scrollToTotal() {
  calc4Title.scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
}

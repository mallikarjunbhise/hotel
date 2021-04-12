function cstInfo() {
  var cstName = document.getElementById("cstName").value;
  var checkIn = document.getElementById("date").value;
  var days = document.getElementById("days").value;
  var people = document.getElementById("ppl").value;

  document.getElementById("name").innerHTML = cstName;
  document.getElementById("arrivalDate").innerHTML = checkIn;
  document.getElementById("stay").innerHTML = days;
  document.getElementById("quantity").innerHTML = people;

  //   prices();

  var Amount;
  var deluxRoom = document.getElementById("delux");
  var deluxPrice = document.getElementById("delux").value;
  var suitRoom = document.getElementById("suit");
  var suitPrice = document.getElementById("suit").value;
  if (deluxRoom.checked) {
    Amount = parseInt(deluxPrice) * parseInt(days);
    document.getElementById("roomPrice").innerHTML =
      "Delux Room " + deluxPrice + " x " + days + " days = " + Amount;
  }
  if (suitRoom.checked) {
    Amount = parseInt(suitPrice) * parseInt(days);
    document.getElementById("roomPrice").innerHTML =
      "Suit Room " + suitPrice + " x " + days + " days = " + Amount;
  }
  if (people > 2) {
    var extraPpl = parseInt(people - 2);
    Amount += extraPpl * 1000;
  }
  //   Amentities

  var ac = document.getElementById("ac");
  var acPrice = document.getElementById("ac").value;
  var locker = document.getElementById("locker");
  var lockerPrice = document.getElementById("locker").value;
  var amenName;

  if (ac.checked) {
    Amount += parseInt(acPrice);
    amenName = "Air Conditioner " + parseInt(acPrice) + "<br>";
  }
  if (locker.checked) {
    Amount += parseInt(lockerPrice);
    amenName += "Locker " + parseInt(lockerPrice) + "<br>";
  }
  if (ac.checked == false && locker.checked == false) {
    amenName = "No Ammenities";
    Amount = parseInt(Amount);
  }
  document.getElementById("amen").innerHTML = amenName;
  document.getElementById("bill").innerHTML = Amount;

  //    Advance Amount
  var adv = document.getElementById("adv").value;
  var balanceAmount = Amount - adv;
  document.getElementById("advanceAmnt").innerHTML = adv;
  document.getElementById("balance").innerHTML = balanceAmount;
}

function payment() {
  location.href = "./payment.html";
}
// function prices() {

// }

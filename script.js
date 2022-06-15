function sendMoney() {
  var enterName = document.getElementById("enterName").value;
  var enterAmount = parseInt(document.getElementById("enterAmount").value);
  var enterSName = document.getElementById("enterSName").value;
  var findSenderBankAccount = enterSName + "BankBalance";
  var enterSAmount = parseInt(document.getElementById(findSenderBankAccount).innerHTML);
  if (enterAmount > enterSAmount) {
    alert("Insufficient Balance.")
  } else {
    var findUserBankAccount = enterName + "BankBalance";

    var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
    var myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - enterAmount;
    document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
    document.getElementById(findUserBankAccount).innerHTML = finalAmount;
    alert(`Successful Transaction !!
       ₹${enterAmount} is sent to ${enterName}@gmail.com.`)

    // transaction history
    var createPTag = document.createElement("li");
    var textNode = document.createTextNode(`Rs. ₹${enterAmount} is sent from the sender with Email-id ${enterSName}@gmail.com
  to recepient with Email-id ${enterName}@gmail.com on ${Date()}.`);
    createPTag.appendChild(textNode);
    var element = document.getElementById("transaction-history-body");
    element.insertBefore(createPTag, element.firstChild);
  }
}

 

//About Page
const reviews = [
  {
    img:
      "assets/about5.jpg"
    
  },
  {

    img:
      "assets/about2.jpg"
    
  },
  {
    
    img:
      "assets/about3.jpg"
    
  },
 
];
// select items
const img = document.getElementById("image");


const prevBtn = document.querySelector(".left");
const nextBtn = document.querySelector(".right");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

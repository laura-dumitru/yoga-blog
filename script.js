


function buy(){
  let name=prompt("What is your full name?");
  let email=prompt("What is your email address?");
  let schedule=prompt("Which class would you like to book?");
  alert("Thank you" + " "+ name +"! We will be in touch shortly! Namaste 🧘🏻‍♀️")
}

let book =document.querySelector(".book")
book.addEventListener("click",buy)



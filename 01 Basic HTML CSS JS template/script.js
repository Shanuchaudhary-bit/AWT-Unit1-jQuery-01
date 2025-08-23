console.clear();
console.info("Hello World! from script.js");

// var elem = document.getElementById("btn");
// elem.addEventListener("click", function() {
//   alert("Button clicked!");
//   var ptag = document.querySelectorAll("p");
//   ptag[0].style.color = "red";
// });


// $("#btn").on("click", function() {
//     alert("Button clicked!");
//     $("p").eq(0).css("color", "red");
//     $("#btn").html("Clicked");
// });


$("button").on("click",buttonevent);



function buttonevent(){
    var buttonContent = this.innerHTML
    alert(`${buttonContent} is clicked!`);
    this.style.color = "red";
    
}
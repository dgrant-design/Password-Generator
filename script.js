
var ucl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lcl = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var sym = "~!@#$%^&*_+.?';"

// Checkbox Having a hard time connecting the checked boxes to the html
//function myFunction(){
   // var checkBox  = document.getElementById("ucl");
   // if (checkBox.checked == true){
       // text.style.display = "block";
    //} else {
    //text.style.display = "none";

//var checkBox  = document.getElementById("lcl");
   // if (checkBox.checked == true){
        //text.style.display = "block";
   // } else {
    //text.style.display = "none";
    
   // var checkBox  = document.getElementById("num");
    //if (checkBox.checked == true){
      //  text.style.display = "block";
    //else {
   // text.style.display = "none";
    
   // var checkBox  = document.getElementById("sym");
   // if (checkBox.checked == true){
    //    text.style.display = "block";
    //} else {
    //text.style.display = "none";

// Generate Password
function generate(){

    var complete = document.getElementById("slider").value;

    var values= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`!@#$%^&*()_+";

    var password = "";



    for(var i = 0; i <= complete; i++){
        password = password + values.charAt(Math.floor(Math.random()*Math.floor(values.length - 1)));
    }


    // Adding password to text area
    document.getElementById("display").value = password;


}



// Set default length of 68

document.getElementById("length").innerHTML = "Length: 68";

//function to set length on slider position

document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }
}



//function to copy password to clipboard

function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard!");


}
var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var BMT, height, weight;

function myFunction(){
    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight*height;
    alert("Luas Persegi panjang itu :" + BMI)
}
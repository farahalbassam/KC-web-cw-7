function BMI(weigth,height) {

    let result = weigth / (height * height)
    return result;
}

console.log(BMI(70,1.7))

function stutus(bmi){
if (bmi< 18.5){
    return ("you are below weigth")
} else if (bmi >= 18.5 && bmi<25){
    return ("you are in healthy weigth")
} else {
    ("you are over weigth")
}

}

function calculate (){
    let weigth = document.getElementById("weigth").value;

    let height = document.getElementById("hieght").value;

    let bmi = BMI(weigth,height);

    let desc = stutus(bmi);

    let div = document.getElementById("result");
    
    div.innerText = bmi + " == " + desc
}


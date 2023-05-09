let result =document.getElementById("result");
let btnGuess =document.getElementById("guess");
let btnRetry =document.getElementById("retry");
let resultW = document.getElementById("congrats");
let rnumber = document.getElementById("rnumber");
let randomvalue1;
let i;
function randomValue()
{

    i=0;
    randomvalue1 = Math.floor(Math.random()*101);
    console.log(randomvalue1);
    result.innerHTML = "";
    btnRetry.style.visibility = "hidden";
    btnGuess.style.visibility = "visible";
    resultW.style.visibility = "hidden";
    rnumber.innerHTML = i + "/7";

}

function getValue()
{
    let value = document.getElementById("screen");
    let input = value.value;
    console.log(input);
    console.log(randomvalue1);

    if(i < 7)
    {

        if(input == null || input >100 || input <0)
        {
            result.innerHTML = "please enter a valid number";
        }
        else
        {
            i+=1;
        if (input == randomvalue1) 
        {
            console.log("good");
            result.style.visibility = "hidden";
            resultW.style.visibility = "visible";
            btnRetry.style.visibility = "visible";
            
        } 
        else if(input < randomvalue1)
        {
            result.innerHTML = "oops too low ";
            rnumber.innerHTML = "<br>" +i + "/7";
        }
        else if(input > randomvalue1)
        {
            result.innerHTML = "oops too high"
            rnumber.innerHTML = "<br>" +i + "/7";
        }
        }
    }
    else
    {
        result.innerHTML =   "GAME OVER ";
        btnGuess.style.visibility = "hidden";
        btnRetry.style.visibility = "visible";
        
    }

}
document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); 
    }
  });
  
document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
      getValue();
    }
  });

randomValue();

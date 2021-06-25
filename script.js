function compute()
{
    var p = document.getElementById("principal");

    var principal= p.value;

    if(principal<=0){
       alert("Enter a positive number")
       p.focus();
       return false;
     }
    var rate = parseFloat(document.getElementById("rate").value);

    var years = document.getElementById("years").value;

    var interest = principal * years * rate /100;

    var year = new Date().getFullYear()+ parseInt(years);

    var amount = parseInt(principal) + interest;

    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"

}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText= rateval;
}

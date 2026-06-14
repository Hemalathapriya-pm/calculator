function add(value) 
{
    document.getElementById("result").value += value;
    
}

function clearresult() 
{
     document.getElementById("result").value = null;
}

function del() 
{
    let a = document.getElementById("result").value;
    document.getElementById("result").value = a.slice(0, -1);
}

function Enter()
{
    let expression = document.getElementById("result").value;

    try {
        document.getElementById("result").value = eval(expression);
    }
    catch {
        document.getElementById("result").value = "Error";
    }
}
function squareroot() {
    let value = document.getElementById("result").value;

    try {
        document.getElementById("result").value = Math.sqrt(eval(value));
    }
    catch {
        document.getElementById("result").value = "Error";
    }
}
function opp()
{
    let value = document.getElementById("result").value;
    
        document.getElementById("result").value = -value;
}
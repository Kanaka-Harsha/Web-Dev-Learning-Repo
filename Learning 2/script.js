function inc()
{
    const number=document.getElementById("inc-val");
    let value=parseInt(number.textContent);
    let pre=value;
    value++;
    number.textContent=value;
    alert(`Incremented Value from ${pre} to ${value}`);
}

function dec()
{
    const number=document.getElementById("dec-val");
    let value=parseInt(number.textContent);
    let pre=value;
    value--;
    number.textContent=value;
    alert(`Decremented Value from ${pre} to ${value}`);
}

function rst_inc()
{
    const inc_number=document.getElementById("inc-val");
        alert(`Increment Value Has Been Reset From ${inc_number.textContent} To 0`);
    inc_number.textContent=0;
}

function rst_dec()
{
    const dec_number=document.getElementById("dec-val");
        alert(`Decrement Value Has Been Reset From ${dec_number.textContent} To 0`);
    dec_number.textContent=0;
}
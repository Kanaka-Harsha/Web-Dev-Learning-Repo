document.getElementById('dark').addEventListener('click',function()
{
    document.body.classList.remove('lightth');
    document.body.classList.add('darkth');

    let para=document.getElementById('para');
    if(para!=null)
    {
    para.textContent = "DARK MODE IS ON";
    }

    let head = document.getElementById('head');
    if(para!=null)
    {
        head.textContent = "DARK";
    }
     
});

document.getElementById('light').addEventListener('click',function()
{
    document.body.classList.remove('darkth');
    document.body.classList.add('lightth');

    let para=document.getElementById('para');
    if(para!=null)
    {
    para.textContent = "LIGHT MODE IS ON";
    }

    let head = document.getElementById('head');
    if(para!=null)
    {
        head.textContent = "LIGHT";
    }

});




function openit()
{
    document.getElementById("menu").style.right="0";
    $('body').toggleClass('no-scroll');
    $('html').toggleClass('no-scroll');
}

function hideit()
{
    document.getElementById("menu").style.right="-200px";
    
    $('body').removeClass('no-scroll');
    $('html').removeClass('no-scroll');
}
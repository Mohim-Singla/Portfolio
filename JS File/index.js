window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 500) {
    document.getElementById("navbar").className = "test";
  } else {
    document.getElementById("navbar").className = "";
  }
}

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

document.querySelectorAll('.nav-items').forEach( function (element) {
  element.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  });
});
const ed = document.getElementById('education');
const positionEd = ed.getBoundingClientRect();
const nav1 = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > positionEd.top) {
    nav1.classList.add('test');
  }
  else{
    nav1.classList.remove('test');
  }
});

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
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  });
});

document.querySelectorAll('.btn').forEach( function (element) {
  element.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  });
});
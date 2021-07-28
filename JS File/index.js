const ed = document.getElementById('education');
const positionEd = ed.getBoundingClientRect();
const nav = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > positionEd.top) {
    nav.classList.add('test');
  }
  else{
    nav.classList.remove('test');
  }
})

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
var map;
function initMap() {
  map = new google.maps.Map(document.querySelector('.map'), {
    center: { lat: 3.3763513, lng: -76.5433389 },
    zoom: 15
  });
}

$('#navbar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;
    console.log(hash);
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 100
    }, 800);
  }
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
})
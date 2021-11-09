$(document).ready(function() {
    $('.slider-container').flickity({
        cellAlign: 'left',
        contain: true,
        autoPlay: 4000,
        wrapAround: true,
        pauseAutoPlayOnHover: false,
        pageDots: false
      });
});
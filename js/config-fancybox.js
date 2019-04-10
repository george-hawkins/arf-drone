$(function () {

    // Just add class="lightbox" to the desired <img> tags and this will wrap them with the <a> tags that fancybox wants.
    $('.lightbox').wrap(function() {
        return '<a href="' + $(this).attr('src') + '" data-fancybox="gallery"></a>'
    });

    // Configure fancybox as per http://fancyapps.com/fancybox/3/docs/#options
    $('[data-fancybox]').fancybox({
       buttons: [
        //'zoom',
        //'share',
        //'slideShow',
        //'fullScreen',
        //'download',
        //'thumbs',
        'close'
      ] 
    });
})

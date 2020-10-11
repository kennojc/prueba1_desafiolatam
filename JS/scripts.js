$(function () {
      $('[data-toggle="tooltip"]').tooltip()
        });


$(function() {
      $("#changethewords").changeWords({
        time: 3000,
        animate: "fadeInLeft",
        selector: "span",
        repeat:true
      });
    });

    $(document).ready(function(){
      $("a").on('click', function(event) {

        if (this.hash !== "") {
          event.preventDefault();


          var hash = this.hash;

          $('html, body').animate({
            scrollTop: $(hash).offset().top 
          }, 800, function(){

            window.location.hash = hash;
          });
        }
      });
    });

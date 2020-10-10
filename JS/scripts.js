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

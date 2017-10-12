$(document).ready(function() {

  $(".btn-danger").on("click", function(event){
    var player1 = $("#player1_race td.active");
    $("#player1_race td.active").removeClass("active");
    player1.next().addClass("active");
  });

  $(".btn-warning").on("click", function(event){
    $("#player2_race td.active").removeClass("active");
    $("#player2_race td.active").next().addClass("active");
  });

});

$(document).ready(function() {
  $(document).on('keyup', function(event) {
    // key a
    if (event.keyCode == 65) {
      var player1 = $("#player1_race td.active");
      $("#player1_race td.active").removeClass("active");
      player1.next().addClass("active");
      var indexPlayer1 = player1.index();
      console.log("Index: " + indexPlayer1);
      indexPlayer1 += 1;

      if (indexPlayer1 == 11) {
        player1.addClass("active");
        $("#myModalPlayer1").modal("show");
        $("#modal-btn-1").click(function() {
          location.reload();
        });
      };
    };

    if (event.keyCode == 67) {
      var player2 = $("#player2_race td.active");
      $("#player2_race td.active").removeClass("active");
      player2.next().addClass("active");
      var indexPlayer2 = player2.index();
      console.log("Index: " + indexPlayer2);
      indexPlayer2 += 1;

      if (indexPlayer2 == 11) {
        player2.addClass("active");
        $("#myModalPlayer2").modal("show");
        $("#modal-btn-2").click(function() {
          location.reload();
        });
      };
    };
  });
});

$(function () {

    $(".change-devour").on("click", function (event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");
  
      var newDevouredState = {
        devoured: newDevoured
      };

      // Send PUT request

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function () {
          console.log("changed devoured status to", newDevoured);
          location.reload(); // Reload the page to get the updated list
        }
      );
    });
  
    $("#create-burger").on("click", function (event) {
      event.preventDefault();
      console.log($("#burg").val().trim())
      var newBurger = {
        burger_name: $("#burg").val().trim(),
        devoured: $("#devd").val().trim()
    };
      // Send POST request

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function (event) {
      var id = $(this).data("id");

      // Send DELETE request
      $.ajax("/api/burgers/" + id, {
        type: "DELETE",
      }).then(
        function () {
          console.log("deleted burger", id);
          location.reload();
        }
      );
    });
  
  })
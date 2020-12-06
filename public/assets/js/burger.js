// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var newDevoured = {
      devoured: newDevoured,
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevoured,
    }).then(function () {
      console.log("changed devoured to", newDevoured);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  const newBurger = {
    burger_name: $("ca").val().trim(),
  };

  $.ajax("/api/burger", {
    type: "POST",
    data: newBurger,
  }).then(function () {
    console.log("created new burger");
    location.reload();
  });
});

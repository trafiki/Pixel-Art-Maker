// Select color input
let color = $("#colorPicker").val();

// Select size input
let height = parseInt($("#inputHeight").val());
let width = parseInt($("#inputWeight").val());

// When size is submitted by the user, call makeGrid()
$('input[type="submit"]').click(function(e) {
  // Prevent "submit" button from reloading the page
  e.preventDefault();
  // Get the current value of width and height
  height = parseInt($("#inputHeight").val());
  width = parseInt($("#inputWeight").val());
  // Check if user is using the default grid size and alert them
  if (width === 1 && height === 1) {
    alert("Seems like you're using the default grid size, you can adjust the grid size at the 'Choose Grid Size' section below");
  }
  // Empty the Design Canvas
  $("#pixelCanvas").empty();
  // Make the Grid
  makeGrid();
});

function makeGrid() {
  // Layout out the canvas height
  for (let i = 0; i < height; i++) {
    $("#pixelCanvas").append('<tr class="canvas-row"></tr>');
  }
  // Layout the canvas width
  for (let i = 0; i < width; i++) {
    $(".canvas-row").append('<td></td>');
  }

  // Set event listener for the color picker
  $("#colorPicker").change(function() {
    color = $("#colorPicker").val();
    $('h1').css('color', color);
  });

  // Set event listener for all the table cells. BG color toggles each time a tab;e cell is being clicked.
  $('td').click(function() {
    if ($(this).css("background-color") !== "rgba(0, 0, 0, 0)") {
      $(this).css("background-color", "rgba(0, 0, 0, 0)");
      return;
    }
    $(this).css("background-color", color);
  });
}
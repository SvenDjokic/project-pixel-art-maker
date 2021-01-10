// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(event) {
  event.preventDefault();
  height = document.getElementById('inputHeight').value;
  width = document.getElementById('inputWidth').value;
  console.log("Height: " + height + " & Width: " + width); // to check if values are stored correctly
  makeGrid(height, width);
  }
)


function makeGrid(height, width) {
  const table = document.getElementById('pixelCanvas');
  for (var i = 0; i < height; i++ ) {
    let row = table.insertRow(i);
    for (var j = 0; j < width; j++) {
      let cell = row.insertCell(j);
    }
  }
}


var height, width, color;


sizePicker.addEventListener('submit', function(event) {
  event.preventDefault(); // prevents page from reloading after each submit
  height = document.getElementById('inputHeight').value;
  width = document.getElementById('inputWidth').value;
  makeGrid(height, width);
  }
)


function makeGrid(height, width) {
  const table = document.getElementById('pixelCanvas');
  color = document.getElementById('colorPicker');
  table.innerHTML = ''; // resets table rows and cells to zero after each submit
  for (var i = 0; i < height; i++ ) {
    let row = table.insertRow(i);
    for (var j = 0; j < width; j++) {
      let cell = row.insertCell(j);
      cell.addEventListener('click', function(event) {
        cell.style.backgroundColor = color.value;
      });
    }
  }
}

bugfix/color-input-type
 feature/random-color
main
function setBoxColor(color) {
  document.getElementById('box').style.backgroundColor = color;
}

document.getElementById('apply-btn').addEventListener('click', function() {
  var color = document.getElementById('color-input').value;
  setBoxColor(color);
});

function randomHex() {
  return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');
}

// Apply random color on button click
document.getElementById('random-btn').addEventListener('click', function() {
  var color = randomHex();
  setBoxColor(color);
});
bugfix/color-input-type

document.getElementById('apply-btn').addEventListener('click', function() {
  var color = document.getElementById('color-input').value;
  document.getElementById('box').style.backgroundColor = color;
});
main
main

 chore/refactor-script

bugfix/color-input-type
 feature/random-color
main
main
function setBoxColor(color) {
  document.getElementById('box').style.backgroundColor = color;
}

chore/refactor-script

main
document.getElementById('apply-btn').addEventListener('click', function() {
  var color = document.getElementById('color-input').value;
  setBoxColor(color);
});

chore/refactor-script

main
function randomHex() {
  return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');
}

// Apply random color on button click
document.getElementById('random-btn').addEventListener('click', function() {
  var color = randomHex();
  setBoxColor(color);
});
chore/refactor-script

bugfix/color-input-type

document.getElementById('apply-btn').addEventListener('click', function() {
  var color = document.getElementById('color-input').value;
  document.getElementById('box').style.backgroundColor = color;
});
main
main
main

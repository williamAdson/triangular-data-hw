/**
 * Checks if three numbers are triangular
 * @param {*integer} num[0] 
 * @param {*integer} num[1] 
 * @param {*integer} num[2] 
 * @returns {*boolean}
 */
function trueTriangle(num){
    if(num[0] + num[1] > num[2]){
        if(num[1] + num[2] > num[0]){
            if(num[0] + num[2] > num[1]) return true
        }
    }
    return false
}
/**
 * Draws triangle on the web
 * @returns {*object}
 */
function draw(num){
  const canvas = document.getElementById('triangle');
  if(canvas.getContext){
    var constant = 0;
    var ctx = canvas.getContext("2d");
    // drawing a triangle
    ctx.beginPath();
    ctx.moveTo(num[0], constant);
    ctx.lineTo(constant, num[1]);
    ctx.lineTo(num[1], num[2]);
    ctx.fill();
  }
}
/**
 * Collects form data
 * @returns {*boolean} 
 */
function getUserInput(num){
  if(trueTriangle(num)) return draw(num);
  return false
}
function formNumbers(e){
  e.preventDefault();
  var value1 = document.querySelector('#value1').value;
  var value2 = document.querySelector('#value2').value;
  var value3 = document.querySelector('#value3').value;
  let num = [value1, value2, value3];
  return getUserInput(num);
}
var searchNumForm = document.querySelector('.numbers-box');
searchNumForm.addEventListener('submit', formNumbers);

window.addEventListener('load', getUserInput);

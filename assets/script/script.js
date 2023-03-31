let ml = document.getElementById("mLiter").value;

// let lt = document.getElementById("liter").value;
// let gal = document.getElementById("gallon").value;
document.getElementById("liter").innerText = 1;
document.getElementById("gallon").innerText = 0.264172;

function liter(x)
{
  return parseFloat(x) / 1000;
}
function gallon(y)
{
  return parseFloat(y) / 3785.41;
}

function display()
{
  let ml = document.getElementById("mLiter").value;
  document.getElementById("liter").innerText = liter(ml);
  document.getElementById("gallon").innerText = gallon(ml);
}
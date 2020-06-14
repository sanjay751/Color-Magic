const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn=document.getElementById('changeBtn');

const colorText=document.querySelector('.colorCode');

btn.addEventListener('click',function()
{
  let hexaVal="#";

  for(var i=0;i<6;i++)
  {
    hexaVal+=hex[getRandomHexVal()];
  }

  document.body.style.backgroundColor=hexaVal;
  colorText.textContent=hexaVal;
})


function getRandomHexVal ()
{
  return Math.floor(Math.random()* hex.length);
}
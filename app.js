//const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const colors=["Red","green","grey","rgb(133,122,120)","#f15025","Pink"];

const btn=document.getElementById('changeBtn');
const colorText=document.querySelector('.colorCode');

btn.addEventListener('click',function()
{
const randomNumbers=getRandomNumber();

  document.body.style.backgroundColor=colors[randomNumbers];
  colorText.textContent=colors[randomNumbers];
})

function getRandomNumber()
{
  return Math.floor(Math.random()*colors.length);
}
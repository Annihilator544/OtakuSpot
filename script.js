

let svg= document.querySelector('svg');
svg.addEventListener('click', function(e){
    console.log(e.target);
    let pp=document.getElementsByClassName('logo')[0];
    let ele=document.getElementsByClassName('sidebar2')[0];
    ele.style.visibility='visible';
    const specifiedElement = document.getElementById('a')

// I'm using "click" but it works with any event
document.addEventListener('click', event => {
  const isClickInside = specifiedElement.contains(event.target)

  if (!isClickInside) {
    ele.style.visibility='hidden';
    // The click was OUTSIDE the specifiedElement, do something
  }
})
});
const element = document.querySelector("div#logo");


document.addEventListener("scroll",(event) => {
async function logochange(event){
  console.log('scrolling');
  console.log(event);
  const logochange = new Promise((resolve) => {setTimeout(() => {
  element.style.fontSize = '5vw';
  element.style.alignItems = 'flex-start';
  element.style.justifyContent = 'start';
  element.style.position = 'sticky';
  element.style.top = '20px';
  element.style.left = '20px';
  element.style.zIndex = '2';
  element.style.textAlign = 'left';
  element.style.margin = '20px';
  }, 100);
  });
}logochange().then(() => setTimeout(() =>{
  console.log('done');
  document.removeEventListener("scroll", (event) => {});
  document.getElementsByClassName('navbar')[0].getElementsByClassName('logonav')[0].innerHTML = 'OtakuSpot';
  element.innerHTML='';
  element.style.height = '0px';
  document.body.height = '100vh';
}, 1000));});




// let svg= document.querySelector('svg');
// svg.addEventListener('click', function(e){
//     console.log(e.target);
//     let pp=document.getElementsByClassName('logo')[0];
//     let ele=document.getElementsByClassName('sidebar2')[0];
//     ele.style.visibility='visible';
//     const specifiedElement = document.getElementById('a')

// // I'm using "click" but it works with any event
// document.addEventListener('click', event => {
//   const isClickInside = specifiedElement.contains(event.target)

//   if (!isClickInside) {
//     ele.style.visibility='hidden';
//     // The click was OUTSIDE the specifiedElement, do something
//   }
// })
// });
// const element = document.querySelector("div#logo");


document.addEventListener("click",(event) => {
  console.log(event.target);
  document.getElementById('logo').remove();
  document.getElementById('bgOtaku').remove();
  document.getElementById('bgOtaku2').remove();
  });
// }logochange().then(() => setTimeout(() =>{
//   console.log('done');
//   document.removeEventListener("scroll", (event) => {});
//   document.getElementsByClassName('navbar')[0].getElementsByClassName('logonav')[0].innerHTML = 'OtakuSpot';
//   element.innerHTML='';
//   element.style.height = '0px';
//   document.body.height = '100vh';
// }, 1000));});
let arr = ['url("images/5652532 1.jpg")', 'url("images/8e72d9395e09999ee5e21e929b11a29d.jpg")','url("images/2ca4eb2007fb1914cb87dbe6f7f348c8.jpg")','url("images/3f263c0934dfbd23fd3307c6abd5a74f.jpg")','url("images/8e72d9395e09999ee5e21e929b11a29d.jpg")','url("images/43df2ea6fddc2f5259ddfe0a3d963a17.jpg")','url("images/70ddf69f63bc2a743f161fba7d05c189.jpg")','url("images/76d6605fe76ead135cbd92232b6abac6.jpg")','url("images/96ccb2ae2d3ea5e846bbea4b1d4b0144.jpg")','url("images/506ec97abf6dc2b420b66c465f9d765a.jpg")','url("images/3793d9661656d142eba8848217c7f516.jpg")','url("images/8220ab2a9733607bcf0677615139df52.jpg")','url("images/b27ef732ea0f246e624e0b4f1d542ea7.jpg")','url("images/dcd3c4750be06778b75e76aa715d9a7a.jpg")','url("images/e2809d23704fbfc9b1f0866d91d0e4c1.jpg")','url("images/OIP.jpeg")','url("images/5652532 1.jpg")'];
const bgOtaku = document.querySelector("div#bgOtaku");
for(let j=1;j<5;j++){
for(let i=0; i<arr.length; i++){
  setTimeout(() => {
    console.log('changing background');
    bgOtaku.style.backgroundImage = arr[i];
  }, j*i*200);
}}
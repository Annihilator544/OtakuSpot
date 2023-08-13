let lore=document.getElementsByClassName('theLore')[0].getElementsByClassName('carousel')[0];

function createLore(Title, Description, Image, Link){
  console.log('creating lore');
  let loreItem=document.createElement('div');
  loreItem.classList.add('loreItem');
  let loreTitle=document.createElement('h3');
  loreTitle.innerHTML=Title;
  loreItem.appendChild(loreTitle);
  let loreImage=document.createElement('img');
  loreImage.src=Image;
  loreItem.appendChild(loreImage);
  let loreDescription=document.createElement('p');
  loreDescription.innerHTML=Description;
  loreItem.appendChild(loreDescription);
  let loreLink=document.createElement('a');
  loreLink.href=Link;
  loreLink.innerHTML='Read More';
//   loreItem.appendChild(loreLink);
  lore.appendChild(loreItem);
  lore.appendChild(loreItem);
}

createLore('The Beginning', 'The Beginning of the OtakuSpot', 'images/philip-oroni-TGElBQvDINo-unsplash.jpg', 'https://www.otakuspot.cf/lore/the-beginning');
createLore('The First War', 'The First War of the OtakuSpot', 'images/philip-oroni-TGElBQvDINo-unsplash.jpg', 'https://www.otakuspot.cf/lore/the-first-war');
createLore('The Second War', 'The Second War of the OtakuSpot', 'images/philip-oroni-TGElBQvDINo-unsplash.jpg', 'https://www.otakuspot.cf/lore/the-second-war');
createLore('The Beginning', 'The Beginning of the OtakuSpot', 'images/philip-oroni-TGElBQvDINo-unsplash.jpg', 'https://www.otakuspot.cf/lore/the-beginning');
createLore('The First War', 'The First War of the OtakuSpot', 'images/philip-oroni-TGElBQvDINo-unsplash.jpg', 'https://www.otakuspot.cf/lore/the-first-war');
createLore('The Second War', 'The Second War of the OtakuSpot', 'images/philip-oroni-TGElBQvDINo-unsplash.jpg', 'https://www.otakuspot.cf/lore/the-second-war');
createLore('The Beginning', 'The Beginning of the OtakuSpot', 'images/philip-oroni-TGElBQvDINo-unsplash.jpg', 'https://www.otakuspot.cf/lore/the-beginning');
createLore('The First War', 'The First War of the OtakuSpot', 'images/philip-oroni-TGElBQvDINo-unsplash.jpg', 'https://www.otakuspot.cf/lore/the-first-war');
createLore('The Second War', 'The Second War of the OtakuSpot', 'images/philip-oroni-TGElBQvDINo-unsplash.jpg', 'https://www.otakuspot.cf/lore/the-second-war');
createLore('The Beginning', 'The Beginning of the OtakuSpot', 'images/philip-oroni-TGElBQvDINo-unsplash.jpg', 'https://www.otakuspot.cf/lore/the-beginning');
createLore('The First War', 'The First War of the OtakuSpot', 'images/philip-oroni-TGElBQvDINo-unsplash.jpg', 'https://www.otakuspot.cf/lore/the-first-war');
createLore('The Second War', 'The Second War of the OtakuSpot', 'images/philip-oroni-TGElBQvDINo-unsplash.jpg', 'https://www.otakuspot.cf/lore/the-second-war');

// let heroes=document.getElementsByClassName('galleryppl')[0];
// let i=12;
// while(i>0){
//     let hero=document.createElement('div');
//     hero.classList.add('img__wrap');
//     let img =document.createElement('img');
//     img.classList.add('img__img');
//     img.setAttribute('src', 'images/image.png');
//     let p = document.createElement('p');
//     p.classList.add('img__description');
//     p.innerHTML='Name';
//     hero.appendChild(img);
//     hero.appendChild(p);
//     heroes.appendChild(hero);
//     i--;
//     }

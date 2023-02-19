const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector(".gallery");


// ! Variant #1

const addElementInString = images
  .map(img => `<li><img class="gallery-img" src=${img.url} alt=${img.alt}></li>`)
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", addElementInString)


// ! Variant #2
// const addElement = element => {
//   return images.map(img => {
//   const newLiTag = document.createElement("li");
//   const newImgTag = document.createElement("img")
//   newImgTag.classList.add("gallery-img")
//   newImgTag.src = img.url;
//   newImgTag.alt = img.alt;
//   newLiTag.append(newImgTag);
//   element.append(newLiTag);

//   return addElement
// })
// }

// addElement(galleryEl)

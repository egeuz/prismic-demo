
/* runtime: a shortcut */
(async () => {
  const imageList = await fetchData();
  generateGalleryItems(imageList);
})();

async function fetchData() {
  const response = await fetch('./get-data');
  const imageList = await response.json();
  return imageList;
}

function generateGalleryItems(images) {
  //loop over each image item
  images.forEach(image => {
    console.log(image);

    const img = document.createElement('img');
    img.classList.add('gallery-img');
    img.src = image.data.picture.url;

    const caption = document.createElement("p");
    caption.innerText = image.data.artwork_name[0].text;

    const galleryItem = document.createElement("div");
    galleryItem.appendChild(img);
    galleryItem.appendChild(caption);

    document.querySelector('.gallery').appendChild(galleryItem);
  });

}



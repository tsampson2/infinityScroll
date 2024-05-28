const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];
// Unsplash API

const count = 10;
const apiKey = "API_Key";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=
${apiKey}&count=${count}
`;

// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
    console.log(key, 1);
    console.log(attributes, 2);
  }
}
// Create Elements for Links & Photos, Add to DOM
function displayPhotos() {
  // Run function for each object in photosArrays
  photosArray.forEach((photo) => {
    // Create <a> to link to Unsplash
    const item = document.createElement("a");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });

    //  Create <img> for photo
    const img = document.createElement("img");
    // img.setAttribute("src", photo.urls.regular);
    // img.setAttribute("alt", photo.alt_description);
    // img.setAttribute("title", photo.alt_description);
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // Put <img> inside<a>, then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {}
}
getPhotos();

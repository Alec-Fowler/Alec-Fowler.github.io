const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images = [
    {filename: "pic1.jpg", alt: "Closeup of a human eye"},
    {filename: "pic2.jpg", alt: "Rock that looks like a wave"},
    {filename: "pic3.jpg", alt: "Purple and white pansies"},
    {filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb"},
    {filename: "pic5.jpg", alt: "Large moth on a leaf"},
];
// 1 base URl
const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/"
// 2 Loop through
// It wasn't working it was driving me nuts, but I remembered that consts need to be above where they are called
const updateDisplayImage = (event) => {
    // on the event it sets the display image and alt to the image that had the event
    displayedImage.src = event.target.src;
    displayedImage.alt = event.target.alt;
}
for (const image of images) {
    // 3. New image element
    const newImg = document.createElement("img");
    // Set the source
    newImg.src = `${baseURL}${image.filename}`;
    // set the alt
    newImg.alt = image.alt;
    // focusable via keyboard
    newImg.tabIndex = 0;
    // 6. add to thumbBar
    thumbBar.appendChild(newImg);

    // 7 event handler
    newImg.addEventListener("click", updateDisplayImage)

    // 8 Keyboard Support Stretch goal
    //TODO Add another event handler to the <img> so that once it is focused via the keyboard, the clicked image can be displayed at full size by pressing the Enter/Return key (and no other key). This is a stretch goal that will take a bit of research to figure out.
}
// () => can act as an anonymous function
btn.addEventListener("click", () => {
    btn.classList.toggle("dark");
    if (btn.classList.contains("dark")) {
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)"
    }
    else {
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0)"
    }
});

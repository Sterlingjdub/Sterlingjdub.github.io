const images = document.querySelectorAll("img[data-src]");

// This will determine at what point the images need to be loaded onto the screen
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px"
};

// This will search for and load the images 
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
}

// This will load the images once they are in the specified window
if ("IntersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (!item.isIntersecting) {
                return;
            } else {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions)

    images.forEach((image) => {
        imgObserver.observe(image);
    });

} else {
    image.forEach((img) => {
        loadImages(img);
    });
}
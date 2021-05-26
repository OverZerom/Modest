document.addEventListener("DOMContentLoaded", function () {
    var scroll = new Splide(".splide", {
        autoplay: true,
        interval: 6000,
        type: "loop",
        pagination: true,
    }).mount();
});

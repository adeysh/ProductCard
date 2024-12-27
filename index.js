let productImage = document.getElementById('productImage');
let btn = document.getElementsByClassName('btn');

function triggerAnimation(element, animationClass) {
    element.classList.remove("animate__animated", animationClass);
    void element.offsetWidth;
    element.classList.add("animate__animated", animationClass);
}

btn[0].onclick = function (params) {
    productImage.src = "images/image1.png";
    triggerAnimation(productImage, "animate__fadeIn");

    for (const bt of btn) {
        bt.classList.remove("active");
    }
    this.classList.add("active");
};
btn[1].onclick = function (params) {
    productImage.src = "images/image2.png";
    triggerAnimation(productImage, "animate__fadeIn");


    for (const bt of btn) {
        bt.classList.remove("active");
    }
    this.classList.add("active");
};
btn[2].onclick = function (params) {
    productImage.src = "images/image3.png";
    triggerAnimation(productImage, "animate__fadeIn");


    for (const bt of btn) {
        bt.classList.remove("active");
    }
    this.classList.add("active");
};
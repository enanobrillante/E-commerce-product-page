//Mostrar navbar Modal en navegacion mobile

const modalNavbar = document.querySelector('.modal-navbar__background');

const menuBtn = document.querySelector('.header__menu');
const closeMenuBtn = document.querySelector('.modal-navbar__close-icon');

menuBtn.addEventListener('click', () => {
    modalNavbar.style.display = 'block';
});
closeMenuBtn.addEventListener('click', () => {
    modalNavbar.style.display = 'none';
});





//Cambio de cantidad de articulos ingresado por el usuario

let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');


let userInputNumber = 0;

plusBtn.addEventListener('click', () => {
    userInputNumber++;
    userInput.value = userInputNumber;
});
minusBtn.addEventListener('click', () => {
    userInputNumber--;
    if (userInputNumber <= 0) {
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
});

//Agregar el total de productos al acarrito al presionar el boton Add to cart

const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastValue = parseInt(cartNotification.innerText);
addToCartBtn.addEventListener('click', () => {


    lastValue += userInputNumber;
    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
    drawProductoInModal();



});


//mostrar el modal carrito de compra con el detalle

const CartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
const cartModalIconClose = document.querySelector('.cart-modal__icon-close');
let cartModalPrice = document.querySelector('.cart-modal__price');
const productContainer = document.querySelector('.cart-modal__checkout-container');

CartIconBtn.addEventListener('click', () => {
    //cartModal.style.display = 'block';
    cartModal.classList.toggle('show');

    if (lastValue == 0) {
        productContainer.innerHTML = '<p class="cart-empty"> Your cart is empty.</p>';

    } else {
        drawProductoInModal();
    }



});
cartModalIconClose.addEventListener('click', () => {
    cartModal.classList.toggle('show');
});


//Borrar el contenido del carrito al presionar delete
function deleteProduct() {
    const cartModalDeleteBtn = document.querySelector('.cart-modal__delete');


    cartModalDeleteBtn.addEventListener('click', () => {

        productContainer.innerHTML = '<p class="cart-empty"> Your cart is empty.</p>';
        lastValue = 0;
        cartNotification.innerText = lastValue;



    });
}


//Cambiar imagenes en galeria
const imageContainer = document.querySelector('.gallery__image-container');
const previusGalleryBtn = document.querySelector('.gallery__image-previus');
const nextGalleryBtn = document.querySelector('.gallery__image-next');
let imgIndex = 1;


nextGalleryBtn.addEventListener('click', () => {
    changeNextImage(imageContainer);
});

previusGalleryBtn.addEventListener('click', () => {
    changePreviusImage(imageContainer);
});

//Mostrar el modal de imagenes al hacer click en la imagen principal

const closeBtnGalley = document.querySelector('.modal-gallery__close');
const modalGalleryBackground = document.querySelector('.modal-gallery__background');

imageContainer.addEventListener('click', () => {
    if (window.innerWidth >= 1115) {
        modalGalleryBackground.style.display = "grid";
    }

});

closeBtnGalley.addEventListener('click', () => {
    modalGalleryBackground.style.display = "none";
});

//Cambiar imagenes principales desde los thumnails

let galleryThumnail = document.querySelectorAll('.gallery__thumnail');
//convierte el nodelist a un array
galleryThumnail = [...galleryThumnail]

galleryThumnail.forEach(thumbnail => {
    thumbnail.addEventListener('click', event => {
        //console.log(event.target.id);
        imageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id}.jpg')`;
    });
});

//Cambiar imagenes principales desde los thumnails en el modal

let modalGalleryThumnail = document.querySelectorAll('.modal-gallery__thumnail');
let modalGalleryImgContainer = document.querySelector('.modal-gallery__image-container');
//convierte el nodelist a un array
modalGalleryThumnail = [...modalGalleryThumnail]

modalGalleryThumnail.forEach(modalThumbnail => {
    modalThumbnail.addEventListener('click', event => {
        //console.log(event.target.id);
        modalGalleryImgContainer.style.backgroundImage = `url('../images/image-product-${event.target.id.slice(-1)}.jpg')`;
    });
});


//Botones previus y next en el modal de imagenes desktop
const modalpreviusGalleryBtn = document.querySelector('.modal-gallery__image-previus');
const modalnextGalleryBtn = document.querySelector('.modal-gallery__image-next');

modalnextGalleryBtn.addEventListener('click', () => {
    changeNextImage(modalGalleryImgContainer);
});

modalpreviusGalleryBtn.addEventListener('click', () => {
    changePreviusImage(modalGalleryImgContainer);
});

// FUNCTIONS

function drawProductoInModal() {
    productContainer.innerHTML = `
    <div class="cart-modal__details-container">
                    <img class="cart-modal__img" src="./images/image-product-1-thumbnail.jpg" alt="image product-1">
                    <div>
                        <p class="cart-modal__product">Autumn Limited Edition...</p>
                        <p class="cart-modal__price">$125.00 x 3
                            <span> $375.00</span>
                        </p>
                    </div>
                    <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
                </div>
                <button class="cart-modal__checkout">Checkout</button>`
    deleteProduct()
    let cartModalPrice = document.querySelector('.cart-modal__price');
    cartModalPrice.innerHTML = `$125.00 x ${lastValue} = <span> $${lastValue*125}.00</span>`;
};

function changeNextImage(imgContainer) {
    if (imgIndex == 4) {
        imgIndex = 1;

    } else {
        imgIndex++;
    }

    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;



};

function changePreviusImage(imgContainer) {
    if (imgIndex == 1) {
        imgIndex = 4;

    } else {
        imgIndex--;
    }

    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;


};
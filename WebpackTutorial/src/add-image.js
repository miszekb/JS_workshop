import Mail from './buffet.PNG';

function addImage() {
    const img = document.createElement('img');
    img.alt = 'Kiwi';
    img.width = 300;
    img.src = Mail;

    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;
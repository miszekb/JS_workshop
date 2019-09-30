import Buffet from './buffet.png';
import './buffet-image.scss';

class BuffetImage {
    render() {
        const img = document.createElement('img');
        img.src = Buffet;
        img.alt ='Buffet';
        img.classList.add('buffet-image');

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(img);
    }
}

export default BuffetImage;
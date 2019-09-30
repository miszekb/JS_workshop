import './hello-world-button.scss'

class HelloWorldButton {

    buttonCssClass = "hello-world-button"

    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello World';
        const body = document.querySelector('body');

        //styles

        button.onclick = () => {
            const p = document.createElement('p');
            p.innerHTML = 'Hello World';
            p.classList.add('hello-world-text');
            body.appendChild(p);
        }

        button.classList.add(this.buttonCssClass);
        body.appendChild(button);
    }
}

export default HelloWorldButton;
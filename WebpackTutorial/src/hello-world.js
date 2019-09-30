import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import Heading from './components/heading/heading';
import React from 'react';

const heading = new Heading();

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
heading.render('hello world');

// addImage();

if (process.env.NODE_ENV === 'production') {
    console.log('Production Mode');
} else if (process.env.NODE_ENV === 'development') {
    console.log('Development Mode');
}

helloWorldButton.fakeMethod();
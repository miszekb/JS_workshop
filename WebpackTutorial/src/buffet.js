import Heading from './components/heading/heading';
import BuffetImage from './components/buffet-image/buffet-image';
import React from 'react';

const heading = new Heading();
heading.render('buffet');

const buffetImage = new BuffetImage();
buffetImage.render();

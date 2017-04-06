import React, {Component} from 'react';
import {render} from 'react-dom';

import router from './routes/index';


render(router, document.querySelector('#app'));
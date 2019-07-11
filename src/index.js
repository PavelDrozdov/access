import './css/main.css';
import {Router} from '@/router';
import {routs} from '@/constans';
import App from '@/components/app';

import Buttons from './examples/buttons';

let injComp = null;

Router.config({ mode: 'history'});
Router
    .add(routs.root, function() {
        console.log('root');
    })
    .add(routs.compoment1, function() {
        injComp = Buttons;
    })
    .add(function() {
        console.log('default');
    })
    .finishConfig();

document.querySelector('#app').innerHTML = App.render(injComp);
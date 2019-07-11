import './css/main.css';
import {Router} from '@/router';
import {routs} from '@/constans';

import navPanel from '@/components/nav-panel';

Router.config({ mode: 'history'});

Router
    .add(routs.root, function() {
        console.log('root');
    })
    .add(routs.compoment1, function() {
        console.log('about');
    })
    .add(function() {
        console.log('default');
    })
    .finishConfig();

    navPanel.render();

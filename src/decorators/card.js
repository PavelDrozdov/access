import {Render} from 'squirrelly';

function Component(selector, teamplate, data)  {
    return function(target) {
        target.render = () => {
            document.querySelector(selector).innerHTML = 
                Render(teamplate, data)
        };
    };
}

export {Component};
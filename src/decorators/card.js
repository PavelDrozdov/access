import {Render} from 'squirrelly';

function Component(selector, teamplate)  {
    return function(target) {
        target.selector = selector;
        target.render = function() {
            document.querySelector(selector).innerHTML = 
                Render(teamplate, target.prototype.data())
        };
    };
}

export {Component};
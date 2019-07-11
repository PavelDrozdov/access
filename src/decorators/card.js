import {Render} from 'squirrelly';

function Component(selector, template)  {
    return function(target) {
        target.selector = selector;
        target.render = function() {
            document.querySelector(selector).innerHTML = 
                Render(template, target.prototype.data())
        };
    };
}

function ComponentWithSourceCode(selector, teamplate)  {
    target.selector = selector;
    target.render = function() {
        document.querySelector(selector).innerHTML = 
            Render(teamplate, target.prototype.data())
        
        document.querySelector(`${selector}-teamplate`).innerHTML = teamplate;
    };
}

export {Component, ComponentWithSourceCode};

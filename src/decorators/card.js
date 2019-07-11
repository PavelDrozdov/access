import {Render} from 'squirrelly';

function Component(template)  {
  return function(target) {
    target.render = function(routerInjection) {
      if(target.prototype.hasOwnProperty('components')) {
        target.prototype.components(routerInjection);
      }
      if(target.prototype.hasOwnProperty('onInit')) {
        target.prototype.onInit();
      }
      return Render(
        template, 
        Object.assign(
          {},
          target.prototype.hasOwnProperty('data')
            ? target.prototype.data() : {}
        )
      );
    };
  };
}

// function ComponentWithSourceCode(selector, teamplate)  {
//     target.selector = selector;
//     target.render = function() {
//         document.querySelector(selector).innerHTML = 
//             Render(teamplate, target.prototype.data())
        
//         document.querySelector(`${selector}-teamplate`).innerHTML = teamplate;
//     };
// }

export {Component};

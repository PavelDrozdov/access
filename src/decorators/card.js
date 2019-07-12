import {Render} from 'squirrelly';

function Component(template)  {
  return function(target) {
    target.render = function(routerInjection) {
      if(target.prototype.hasOwnProperty('components')) {
        target.prototype.components(routerInjection);
      }
      if(target.prototype.hasOwnProperty('onInit')) {
        setTimeout(() => target.prototype.onInit(),50);
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

export {Component};

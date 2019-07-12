import {Component} from '@/decorators/card';
import {definePartial} from 'squirrelly';

import Header from './header';
import NavPanel from './nav-panel';
import Footer  from './footer';

@Component(
  `
    <div id="layout">
      <div id="main">
        {{include("NavPanel")/}}
        {{if(options.isHasRouterInjection)}}
          {{include("router")/}}
        {{#else}}
        {{/if}}
      </div>
      {{include("Footer")/}}
    </div>
  `
)
export default class App {
  components (routerInjection) {
    definePartial("Header", Header.render());
    definePartial("NavPanel", NavPanel.render());
    definePartial("Footer", Footer.render());

    if(routerInjection) {
      this.isHasRouterInjection = true;
      definePartial("router", routerInjection.render());
    } else {
      this.isHasRouterInjection = false
    }
  }
  data () {
    return {
      'isHasRouterInjection': this.isHasRouterInjection
    }
  }
}

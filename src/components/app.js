import {Component} from '@/decorators/card';
import {definePartial} from 'squirrelly';

import Header from './header';
import NavPanel from './nav-panel';

@Component(
  `
    {{include("Header")/}}
    <div class="main-area">
      {{include("NavPanel")/}}
      <section class="main-content">
        {{if(options.isHasRouterInjection)}}
          {{include("router")/}}
        {{#else}}
        {{/if}}
      </section>  
    </div>
  `
)
export default class App {
  components (routerInjection) {
    definePartial("Header", Header.render());
    definePartial("NavPanel", NavPanel.render());
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

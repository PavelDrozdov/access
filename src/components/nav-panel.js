import {Component} from '@/decorators/card';
import {routs} from '@/constans';

@Component(
  `
    <a href="#" id="menuLink" class="menu-link">
      <span></span>
    </a>
    <div id="menu">
      <div class="pure-menu">
        <a class="pure-menu-heading" href="#">accessibility</a>
        {{each(options.links)}}
        <ul class="pure-menu-list">
          <li class="pure-menu-item"><a href="{{@this.link}}" class="pure-menu-link">{{@this.name}}</a></li>
        </ul>
        {{/each}}
      </div>
    </div>
  `
)
export default class NavPanel {
  onInit() {
    let layout   = document.getElementById('layout'),
        menu     = document.getElementById('menu'),
        content  = document.getElementById('main');

    let toggleClass = (element, className) => {
      var classes = element.className.split(/\s+/),
        length = classes.length,
        i = 0;

      for(; i < length; i++) {
        if (classes[i] === className) {
          classes.splice(i, 1);
          break;
        }
      }
      // The className is not found
      if (length === classes.length) {
        classes.push(className);
      }

      element.className = classes.join(' ');
    };

    let toggleAll = (e) => {
      var active = 'active';
      toggleClass(layout, active);
      toggleClass(menu, active);
    };

    content.onclick = function(e) {
        toggleAll(e);
    };
  }

  data () {
    return {
      links: [
        {link: routs.root, name: 'home'},
        {link: routs.compoment1, name: 'the first example'},
      ]
    }
  }
}

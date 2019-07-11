import {Component} from '@/decorators/card';
import {routs} from '@/constans';

@Component(
  `
    <nav class="main-nav">
      {{each(options.links)}}
        <ul>
          <li><a href="{{@this.link}}">{{@this.name}}</a></li>
        </ul>
      {{/each}}
    </nav>
  `
)
export default class NavPanel {
  data () {
    return {
      links: [
        {link: routs.root, name: 'home'},
        {link: routs.compoment1, name: 'the first example'},
      ]
    }
  }
}

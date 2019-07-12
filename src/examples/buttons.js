import {Component} from '@/decorators/card';

@Component(
  `
    <div class="content">
      <h2 class="content-subhead">How to use this layout</h2>
      <p>
          To use this layout, you can just copy paste the HTML, along with the CSS in 
          <a href="/css/layouts/side-menu.css" alt="Side Menu CSS">side-menu.css</a>,
          and the JavaScript in <a href="/js/ui.js">ui.js</a>. The JS file uses vanilla
          JavaScript to simply toggle an <code>active</code> class that makes the menu
          responsive.
      </p>
    </div>
  `
)
export default class Buttons {
  data () {
    return {}
  }
}

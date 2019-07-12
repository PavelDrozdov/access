import {Component} from '@/decorators/card';

@Component(
  `
    <div class="header">
      <h1>Page Title</h1>
      <h2>A subtitle for your page goes here</h2>
    </div>
  `
)
export default class Header {
  data () {
    return {}
  }
}

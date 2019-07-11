import {Component} from '@/decorators/card';
import {routs} from '@/constans';

@Component(
    '#app',
    `
    {{each(options.links)}}
        <ul>
         <li><a href="{{@this.link}}">{{@this.name}}</a></li>
         </ul>
    {{/each}}
    `
)
export default class navPanel {
    data () {
        return {
            links: [
                {link: routs.root, name: 'home'},
                {link: routs.compoment1, name: 'the first example'},
            ]
        }
            
    }
}

import {Component} from '../decorators/card';

@Component(
    '#app',
    `Is: {{fav}} is: {{cake}}`
)
export default class navPanel {
    data () {
        return {
            fav: "Squsadirrelly", cake: "Chocolate"}
    }
}

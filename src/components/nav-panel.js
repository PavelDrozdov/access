import {Component} from '../decorators/card';

@Component(
    '#app',
    `Is: {{fav}} is: {{cake}}`,
    {fav: "Squirrelly", cake: "Chocolate"}
)
class navPanel {
    constructor() {
        this.selector = '#app';
    }
    // render() {
    //     document.querySelector(this.selector).innerHTML = 
    //         renderAQRL(`
    //             This is a template
    //             My favorite template engine is: {{fav}}
    //             My favorite kind of cake is: {{cake}}
    //             `, {
    //                 fav: "Squirrelly", cake: "Chocolate"
    //         })
    // }
}

export {navPanel};
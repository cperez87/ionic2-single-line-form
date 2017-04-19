import { Component, ViewChildren, ViewChild, QueryList, ElementRef } from '@angular/core';

@Component({
    selector: 'xine-single-line-container',
    templateUrl: 'single-line-container.component.html'
})

export class SingleLineContainerComponent {
    @ViewChildren('*') subComponents: QueryList<ElementRef> = 
        new QueryList<ElementRef>();
    
    constructor() { }

    get subComponentsCount() {
        return this.subComponents.length;
    }
}
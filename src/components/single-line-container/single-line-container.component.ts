import { Component, ViewChildren, ViewChild, QueryList, ElementRef, OnInit } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
    selector: 'xine-single-line-container',
    templateUrl: 'single-line-container.component.html'
})

export class SingleLineContainerComponent implements OnInit {
    @ViewChildren('*') subComponents: QueryList<ElementRef> = 
        new QueryList<ElementRef>();

    @ViewChild(Slides) slides: Slides;
    
    constructor() { }

    ngOnInit() {
        this.subComponents.forEach(element => {
            element.nativeElement.addEventListener('focus', this.onSubComponentFocused);
        })
    }

    onSubComponentFocused(event: any) {
        console.log("focus changed");
    }
    
}
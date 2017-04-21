import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, inject, async } from '@angular/core/testing';
import { TextInput } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { SingleLineContainerComponent } from '../src/components/single-line-container/single-line-container.component';

let comp: SingleLineContainerComponent;
let fixture: ComponentFixture<SingleLineContainerComponent>;

describe("SingleLineContainer", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [SingleLineContainerComponent, TextInput]
        });

        fixture = TestBed.createComponent(SingleLineContainerComponent);
        comp = fixture.componentInstance;
    });

    it("should not have slides", () => {
        expect(comp.slides.length()).toBe(0);
    });

    /*it("should discover the visible children", async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb
        .createAsync(TestWrapperComponent)
        .then((fixture) => {
            let componentInstance: SingleLineContainerComponent
                =  <SingleLineContainerComponent>fixture.debugElement.children[0].componentInstance;
            
            fixture.detectChanges();
            console.log(componentInstance.subComponentsCount);
            expect(componentInstance.subComponentsCount).toBe(2);
        });
    })));*/
});

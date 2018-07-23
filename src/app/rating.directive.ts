import { Directive } from '@angular/core';
import {ElementRef,Renderer,Input} from '@angular/core'
@Directive({
  selector: '[appRating]'
})
export class RatingDirective {
@Input() starValue:number;
  constructor(private el: ElementRef,
              private renderer: Renderer) { 
renderer.setElementStyle(el.nativeElement,'color','gray');
console.log("el.nativeElement", el.nativeElement);
  }

  ngOnInit() {
        console.log("input-box keys  : ", this.starValue);
        
    }

}

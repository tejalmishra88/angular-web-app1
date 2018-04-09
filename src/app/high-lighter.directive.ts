import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighLighter]'
})
export class HighLighterDirective {

  constructor( private el:  ElementRef) { 
    el.nativeElement.style.backgroundColor = 'gold';
  }

}

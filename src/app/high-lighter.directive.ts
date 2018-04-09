import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLighter]'
})
export class HighLighterDirective  implements OnInit {
@Input() appHighLighter: string;
  constructor( private el:  ElementRef) {
  }

    ngOnInit() { 
      this.el.nativeElement.style.backgroundColor = this.appHighLighter;
    }
    @HostListener('mouseenter') onmouseenter() {
      this.el.nativeElement.style.backgroundColor = 'yellow';
      this.el.nativeElement.style.color = '#fff';
    }
    @HostListener('mouseleave') onmouseleave(){
      this.el.nativeElement.style.backgroundColor = this.appHighLighter;
      this.el.nativeElement.style.color = '';

    }

}

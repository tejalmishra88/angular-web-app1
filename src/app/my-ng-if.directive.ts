import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appMyNgIf]'
})
export class MyNgIfDirective {

  constructor( private viewContainerRef: ViewContainerRef,
                private templateRef: TemplateRef<object>) { }


@Input() set appMyNgIf(isBoolean: boolean) {
  if (isBoolean) { this.viewContainerRef.createEmbeddedView(this.templateRef); } 
  else{ this.viewContainerRef.clear(); }
}

}

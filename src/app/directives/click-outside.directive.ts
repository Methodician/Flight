import { Directive, ElementRef, Output, HostListener } from '@angular/core';
import { EventEmitter } from 'events';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {

  constructor(private elementRef: ElementRef) { }

  @Output()
  public outsideClicked = new EventEmitter();

  @HostListener('document: click', ['$event.target'])
  public onClick(targetElement){
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if(!clickedInside){
      this.outsideClicked.emit(null);
    }
  }

}

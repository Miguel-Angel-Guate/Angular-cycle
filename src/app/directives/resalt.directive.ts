import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResalt]',
})
export class ResaltDirective {
  @Input('appResalt') newColor: string;
  constructor(private er: ElementRef) {
    console.log('the directive was call');
    er.nativeElement.style.color = 'blue';
  }
  @HostListener('mouseenter') mouseEnter() {
    console.log(this.newColor);
    this.er.nativeElement.style.color = 'red';
  }
  @HostListener('mouseleave') mouseLeave() {
    this.er.nativeElement.style.color = null;
  }
}

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrdCard]'
})
export class PrdCardDirective {
  boredrRadius:string = '10px';
  boxShadow :string = '1px 1px 5px 0px gray'
  transition :string = 'all .3s ease-in-out';
  constructor(private elementRef:ElementRef) {
    this.elementRef.nativeElement.style.boredrRadius = this.boredrRadius;
    this.elementRef.nativeElement.style.transition = this.transition;
  }
  @HostListener('mouseover')func1(){
    this.elementRef.nativeElement.style.boredrRadius ='20px';
    this.elementRef.nativeElement.style.boxShadow = '5px 2px 5px 0px gray ';
    this.elementRef.nativeElement.style.opacity = '0.8'  
  }
  @HostListener('mouseout')func2(){
    this.elementRef.nativeElement.style.boredrRadius = this.boxShadow
    this.elementRef.nativeElement.style.boxShadow = this.boxShadow
    this.elementRef.nativeElement.style.opacity = '1'  
  
  }

}

import { Directive,ElementRef,Renderer,HostListener,HostBinding,Input,OnInit} from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {
 @HostListener('mouseenter') mouseover(){
   this.backgroudColor=this.highlightColor;
 };
 @HostListener('mouseleave') mouseleave(){
   this.backgroudColor=this.defaultColor;
 };
 @HostBinding('style.backgroundColor') get setColor(){
   return this.backgroudColor;
 };
@Input() defaultColor = 'white'; 
@Input('Highlight') highlightColor = 'white'; 


private backgroudColor:string;
  constructor(private elementRef: ElementRef,private renderer : Renderer) {
 //  this.elementRef.nativeElement.style.background = 'blue' ;
 // this.renderer.setElementStyle(this.elementRef.nativeElement,'background-color','red'); 
  }

   ngOnInit(){
     this.backgroudColor = this.defaultColor;
  }

}

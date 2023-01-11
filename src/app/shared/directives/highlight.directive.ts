import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[mtHighlight]'
})
export class HighlightDirective {
  @Input() mtHighlight!: string;
  @Input() mtHighlightColor!: string;
  constructor(private _el: ElementRef<HTMLElement>, private _renderer: Renderer2) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this._el.nativeElement);
  }

  @HostListener('mouseover')
  handleMouseover() {
    console.log('mouseover');
    this._renderer.addClass(this._el.nativeElement, this.mtHighlight || 'highlight');
  }

  @HostListener('mouseout')
  handleMouseout() {
    this._renderer.removeClass(this._el.nativeElement, this.mtHighlight || 'highlight');
  }
}

import {Directive, ElementRef, inject, Renderer2, signal} from '@angular/core';

@Directive({
  selector: '[appDbClick]',
  host: {
    '(dblclick)': 'handleDbClick()'
  }
})
export class DbClickDirective {
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  private isHidden = signal(false);

  handleDbClick() {
    this.isHidden.set(!this.isHidden);


    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'display',
      this.isHidden() ? 'none' : 'block'
    );
  }
}

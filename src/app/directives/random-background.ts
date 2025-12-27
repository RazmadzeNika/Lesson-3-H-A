import {Directive, ElementRef, inject, OnInit} from '@angular/core';

@Directive({
  selector: '[appRandomBackground]',
  host: {
    "(click)": 'changeColor()'
  }
})
export class RandomBackground implements OnInit {
  private elementRef = inject(ElementRef);

  ngOnInit() {
    this.changeColor();
  }


  changeColor() {
      const randomColor = '#' + Math.random().toString(16).slice(2, 8);
      this.elementRef.nativeElement.style.backgroundColor = randomColor;
  }

}

import {Directive, ElementRef, inject, OnInit} from '@angular/core';

@Directive({
  selector: '[appRandomBackground]',
})
export class RandomBackground implements OnInit {
  private elementRef = inject(ElementRef);


  ngOnInit() {
    const randomColor = '#' + Math.random().toString(16).slice(2, 8);
    this.elementRef.nativeElement.style.backgroundColor = randomColor;
  }

}

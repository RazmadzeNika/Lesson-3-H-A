import {Directive, output, signal} from '@angular/core';

@Directive({
  selector: '[appElementClick]',
  host: {
    '(click)': "handleElementCount()"
  }
})
export class ElementClick {
  counter = signal(0);
  count = output<number>();

  handleElementCount() {
    this.counter.update((state) => ++state)
    this.count.emit(this.counter());
  }
}

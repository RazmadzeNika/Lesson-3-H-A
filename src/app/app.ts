import {Component, signal} from '@angular/core';
import {RandomBackground} from './directives/random-background';
import { DbClickDirective} from './directives/db-click';
import {ElementClick} from './directives/element-click';

@Component({
  selector: 'app-root',
  imports: [
    RandomBackground,
    DbClickDirective,
    ElementClick
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  isHidden = signal(false);
  count = signal<number>(0);

  handleCount(count: number) {
    this.count.set(count);
  }
}

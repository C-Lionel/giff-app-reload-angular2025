import { Component, input } from '@angular/core';
import { GifListItemComponent } from "./gif-list-item/gif-list-item.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'gif-list',
  imports: [GifListItemComponent, NgFor],
  templateUrl: './gif-list.component.html'
})
export class GifListComponent {
      gifs = input.required<string[]>()
 }

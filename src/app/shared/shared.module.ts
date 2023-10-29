import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { LoaderComponent } from './loader/loader.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { DropdownToggleDirective } from './directives/dropdown';

@NgModule({
  declarations: [
    MovieCardComponent,
    LoaderComponent,
    ShortenPipe,
    DropdownToggleDirective,
  ],
  exports: [
    MovieCardComponent,
    LoaderComponent,
    ShortenPipe,
    DropdownToggleDirective,
    LoaderComponent
  ],
  imports: [CommonModule],
})
export class SharedModule {}

import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownToggleDirective {
  @Input('appDropdown') class!: string;
  @HostBinding('class') className!: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    //   this.elementRef.nativeElement.style.backgroundColor = 'red';
    // this.className = 'show';
  }

  @HostListener('click')
  public toggleDropdown(): void {
    this.className = this.class ? this.class : 'show';
    this.toggleClass(this.className);
  }

  private toggleClass(className: string) {
    const dropdown = this.elementRef.nativeElement.nextElementSibling;

    const hasClass = dropdown?.classList.contains(className);
    if (hasClass) {
      this.removeClass(className);
    } else {
      this.addClass(className);
    }
  }

  private addClass(className: string) {
    const dropdown = this.elementRef.nativeElement.nextElementSibling;

    this.renderer.addClass(dropdown, className);
  }

  private removeClass(className: string) {
    const dropdown = this.elementRef.nativeElement.nextElementSibling;

    this.renderer.removeClass(dropdown, className);
  }
}

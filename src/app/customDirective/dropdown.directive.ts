import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
     selector:"[appDropDown]"
})
export class DropDownDirective{
@HostBinding('class.btn-primary') isOpen=false;
    @HostListener('click')   onclick(){
        console.log(this.isOpen);
    this.isOpen=!this.isOpen;
    }
}
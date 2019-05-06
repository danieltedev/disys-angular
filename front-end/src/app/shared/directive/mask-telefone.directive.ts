import { Directive, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
// tslint:disable-next-line: directive-selector
  selector: '[maskTelefone]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MaskTelefoneDirective,
    multi: true
  }]
})
export class MaskTelefoneDirective implements ControlValueAccessor {

  onTouched: any;
  onChange: any;

  constructor(private el: ElementRef) { }

  writeValue(obj: any): void {
    this.el.nativeElement.value = obj === '' || !obj ? '' : this.applyMask(obj as string);
  }

  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {
    this.onChange(Number(this.applyRealValue($event.target.value as string)));
    this.el.nativeElement.value = this.applyMask($event.target.value as string);
  }

  @HostListener('blur', ['$event'])
  onBlur($event: any) {
    console.log($event.target.value);
    this.onChange(Number(this.applyRealValue($event.target.value as string)));
    this.el.nativeElement.value = this.applyMask($event.target.value as string);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error("Method not implemented.");
  // }

  applyMask(value: string) {
    value = value.replace(/\D/g, '');
    if (value.length <= 10) {
      return (value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3'));
    }
    return (value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'));
  }

  applyRealValue(value: string): number {
    return Number(value.replace(/\D/g, ''));
  }

}

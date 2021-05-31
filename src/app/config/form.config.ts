import { FormGroup, ValidatorFn } from '@angular/forms';

export function ƒMatchedValidator(
  firstControlName: string, secondControlName: string
): any {
  return (formGroup: FormGroup) => {
    const firstControl = formGroup.get(firstControlName);
    const secondControl = formGroup.get(secondControlName);
    if (firstControl?.value !== secondControl?.value) {
      secondControl?.setErrors({ confirmedValidator: true });
      return;
    }
    secondControl?.setErrors(null);
  };
}

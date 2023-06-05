import { FormGroup } from "@angular/forms";


export function passwordChecker(controlName: string, compareControlName: string) {
    return (fromGroup: FormGroup) => {
        const password = fromGroup.controls[controlName]
        const comparePassword = fromGroup.controls[compareControlName]
        
        if (password.value != comparePassword.value) {
            comparePassword.setErrors({'must match':true})
        } else {
            comparePassword.setErrors(null)
        }
    }
}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { routerTransition } from '@animations/router.animations';
import { ContactService } from '@services/contact.service';
import { validateEmail } from '@shared/validators/validateEmail';
import { validatePhoneNumber } from '@shared/validators/validatePhoneNumber';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../../shared/page-styles.css'],
  animations: [routerTransition],
  host: { '[@routerTransition]': '' }
})
export class ContactComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactSvc: ContactService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, validateEmail]],
      phone: ['', validatePhoneNumber],
      message: ['', Validators.required],
      timestamp: '',
      emailForwarded: ''
    })
   }

  ngOnInit() {
  }

  isErrorVisible(controlName: string, error: string) {
    let control = this.form.controls[controlName];
    return control.dirty && control.errors && control.errors[error];
  }

  submit() {
    this.contactSvc.submitContact(this.form.value)
      .then(
      success => {
        alert('Thank you for your interest!');
        //this.notifyZapierOfContact();
        this.form.reset();
      });
  }

}

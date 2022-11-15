import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dd-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  contactForm!: FormGroup;
  name!: FormControl;
  email!: FormControl;
  message!: FormControl;

  constructor() {
    this.initializeFormControls();
    this.initializeFormGroup();
  }

  ngOnInit(): void {
  }

  initializeFormControls() {
    this.name = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.message = new FormControl('', [Validators.required]);
  }

  initializeFormGroup() {
    this.contactForm = new FormGroup(
      {
        name: this.name,
        email: this.email,
        message: this.message
      }
    );
  }

  sendMail() {
    console.log(this.contactForm.value);
  }

  openNewTab(link: string) {
    window.open(link, '_blank');
  }

}

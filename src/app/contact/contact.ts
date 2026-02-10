import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactModel } from './contact.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  contact = new ContactModel();

  submitForm() {
    console.log('Contact submitted:', this.contact);
    alert(`Thanks ${this.contact.getFullName()}! We’ll be in touch.`);
    this.contact = new ContactModel(); // reset form
  }
}

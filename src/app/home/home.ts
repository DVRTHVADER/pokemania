import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { Card } from '../card/card';
import { Contact } from '../contact/contact';
import { Signup } from '../signup/signup';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Nav, Card, Contact, Signup],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}

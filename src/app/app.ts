import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './nav/nav';
import { Card } from './card/card';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  imports: [Nav, Card, Contact, RouterOutlet],

  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('PokeMania');
}

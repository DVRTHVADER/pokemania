import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-nav',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  iconUrl2: string = 'https://icons.veryicon.com/png/o/miscellaneous/effevo/game-49.png';
  iconUrl: string =
    'https://static.vecteezy.com/system/resources/thumbnails/036/628/022/small/ai-generated-cool-skull-illustration-for-your-t-shirt-design-free-png.png';
}

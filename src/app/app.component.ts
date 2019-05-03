import { Component, OnInit } from '@angular/core';
import { Post } from 'model/Post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Blogular';

  posts: any[] = [
    new Post('Premier titre', 'Ici le contenu du premier post.'),
    new Post('Deuxi\u00e8me titre', 'Ici le contenu du deuxi\u00e8me post.'),
    new Post('Troisi\u00e8me titre', 'Ici le contenu du troisi\u00e8me post.'),
  ];

  ngOnInit() {

  }
}

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
    new Post('Deuxième titre', 'Ici le contenu du deuxième post.'),
    new Post('Troisième titre', 'Ici le contenu du troisième post.'),
  ];

  ngOnInit() {

  }
}

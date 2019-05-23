

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';
@Component ({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostList implements OnInit, OnDestroy {

 posts: Post[] = [];
 postsSub: Subscription;

constructor(public postsService: PostService) {

}
ngOnInit() {
   this.posts = this.postsService.getPost();
   this.postsSub= this.postsService.getPostUpdated().subscribe((posts: Post[]) => {
       this.posts = posts;
    }
     );

}
ngOnDestroy() {
this.postsSub.unsubscribe();
}


}

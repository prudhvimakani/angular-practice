import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {

  }
  getPost(): Observable<any> {
    return this.http.get(this.url)
      .pipe(map((response: Response) => response ))
  }

  createPosts(post) {
    return this.http.post(this.url, JSON.stringify(post))
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  deletePost(post) {
    return this.http.delete(this.url + '/' + post.id)
  }

}

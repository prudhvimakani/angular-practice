import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Observable, combineLatest } from 'rxjs'
// import 'rxjs/add/observable/combineLatest'
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts;


  constructor(
    private service: PostService,
    private route: ActivatedRoute
    ) { }

  // HTTP Get call
  ngOnInit() {

    combineLatest(
      this.service.getPost(),
      this.route.paramMap)
    // .pipe(switchMap(resp: Response => {
    //   console.log(resp.json())
    // }))
    .subscribe(resp => {
      console.log("inisde combinelatest")
      console.log(resp[0])
      console.log(resp[1])
    })

    // Observable.combineLatest([
    //   this.service.getPost(),
    //   this.route.paramMap
    // ])
    // .subscribe({

    // })

    this.service.getPost()
      .subscribe(response => {
        this.posts = response
      }, (error: Response) => {
        alert("An unexpected error occured");
        console.log(error)
      })
  }

  // HTTP Post call
  createPost(inputEle: HTMLInputElement) {
    let post: any = { title: inputEle.value }
    inputEle.value = '';
    this.service.createPosts(post)
      .subscribe((response: Response) => {
        console.log(response.json())
        post.id = response['id'];
        this.posts.splice(0, 0, post)
      }, (error: Response) => {
        if (error.status === 400) {
          // this.form.setErrors(error.json())
        }
        else {
          alert("An unexpected error occured");
          console.log(error)
        }
      })
  }

  // HTTP Patch call
  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(
        response => {
          console.log(response)
        }, error => {
          alert("An unexpected error occured");
          console.log(error)
        })
  }

  // HTTP Delete call
  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post)
          this.posts.splice(index, 1)
        }, (error: Response) => {
          if (error.status === 404)
            alert("Post is deleted alreay")
          else {
            alert("An unexpected error occured");
            console.log(error)
          }
        })
  }

}

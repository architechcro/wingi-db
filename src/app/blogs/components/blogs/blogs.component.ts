import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {BlogModel} from "../../models/blog.model";
import {MDBModalRef, MDBModalService} from "angular-bootstrap-md";
import {blogsLoading, getBlogs} from "../../store/blog.selector";
import {select} from "@ngrx/core";
import * as fromBlogs from "../../store/blog.actions";
import {getUser} from "../../../auth/store/auth.selectors";
import {map} from "rxjs/operators";
import {Store} from "@ngrx/store";
import {AppState} from "../../../reducers";
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
 blogs$: Observable<BlogModel[] | null >;
 isLoading$: Observable<boolean>;
 modalRef: MDBModalRef;

 modalConfig = {
   class: 'modal-dialog-centered'
 };
  constructor(
      private store: Store<AppState>,
      private modalService: MDBModalService,

  ) { }

  ngOnInit() {
    this.isLoading$ = this.store.select(blogsLoading);
    this.blogs$ = this.store.pipe(
        select(getBlogs),
        map( (blogs: BlogModel[]) => {
          if(!blogs) {
            this.store.dispatch(new fromBlogs.LoadBlogs());
          }
          return blogs;
        })
    )
  }
  get user() {
    return this.store.select(getUser);
  }

}

import { Action } from '@ngrx/store';
import {BlogModel} from "../models/blog.model";

export enum BlogActionTypes {
  LoadBlog = '[Blog] Load Blog',
  LoadBlogs = '[Blog] Load Blogs',
  BlogsLoaded = '[Blog] Blogs loaded',

  CreateBlog = '[Blog] Create Blog',
  BlogCreated = '[Blog] Blog created',

  UpdateBlog = '[Blog] Update Blog',
  BlogUpdated = '[Blog] Blog updated',
  DeleteBlog = '[Blog] Delete Blog',
  BlogDeleted ='[Blog] Blog deleted',

  BlogError = '[Blog] Blog error'
}

export class LoadBlog implements Action {
  readonly type = BlogActionTypes.LoadBlog;
}
export class LoadBlogs implements Action {
  readonly type = BlogActionTypes.LoadBlogs;
}
export class BlogsLoaded implements Action {
  readonly type = BlogActionTypes.BlogsLoaded;
  constructor(public payload: { blogs: BlogModel[] }) {}
}
export class CreateBlog implements Action {
  readonly type = BlogActionTypes.CreateBlog;
}
export class BlogCreated implements  Action{
  readonly type = BlogActionTypes.BlogCreated;
  constructor( public payload: { blog: BlogModel }) {}
}

export class UpdateBlog implements Action{
  readonly type = BlogActionTypes.UpdateBlog;
  constructor(public payload: {blog: BlogModel}) {}
}

export class BlogUpdated implements Action{
  readonly type = BlogActionTypes.BlogUpdated;
  constructor(public payload: {blog: BlogModel}) {}
}
export class DeleteBlog implements Action {
  readonly type = BlogActionTypes.DeleteBlog;
}
export class BlogDeleted implements  Action {
  readonly type = BlogActionTypes.BlogDeleted;
  constructor( public  payload: {blog: BlogModel }) {}
}

export class BlogError {
  readonly type = BlogActionTypes.BlogError;

  constructor(public payload: {Error : any}) {}
}
export type BlogActions =
    | LoadBlog
    | LoadBlogs
    | BlogsLoaded
    | CreateBlog
    | BlogCreated
    | UpdateBlog
    | BlogUpdated
    | DeleteBlog
    | BlogDeleted
    | BlogError;

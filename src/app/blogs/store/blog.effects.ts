import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {BlogService} from "../services/blog.service";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../reducers";
import {BlogActionTypes} from "./blog.actions";
import {map, switchMap, withLatestFrom} from "rxjs/operators";
import {getUser} from "../../auth/store/auth.selectors";
import {BlogModel} from "../models/blog.model";
import * as firebase from "firebase";
import * as fromBlogs from './blog.actions';


@Injectable()
export class BlogEffects {
    constructor(private actions$: Actions,
                private blogService: BlogService,
                private store: Store<AppState>
    ) {
    }

    @Effect()
    query$ = this.actions$.pipe(
        ofType(BlogActionTypes.LoadBlogs),
        withLatestFrom(this.store.pipe(select(getUser))),
        switchMap((([, user]: any) => {
                return this.blogService.getBlogs(user.uid)
                    .pipe(
                        map((data: firebase.firestore.QuerySnapshot) => {
                            const blogData: BlogModel[] = data.docs.map((res: firebase.firestore.QueryDocumentSnapshot) => {
                                let blog: BlogModel = res.data() as BlogModel;
                                blog.id = res.id;
                                return blog;
                            });
                            return (new fromBlogs.BlogsLoaded({blogs: blogData}));
                        })
                    )

            })
        ),
    );

    @Effect({dispatch: false})
    added$ = this.actions$.pipe(
        ofType(BlogActionTypes.BlogCreated),
        map( (action: fromBlogs.BlogCreated) => action.payload),
        withLatestFrom(this.store.pipe(select(getUser))),
        switchMap(([payload,user]: any) =>   this.blogService.addBlog(payload.blog,user.uid) )
    );

    @Effect({dispatch: false})
    updated$ = this.actions$.pipe(
        ofType(BlogActionTypes.BlogUpdated),
        map( (action: fromBlogs.BlogCreated) => action.payload),
        withLatestFrom(this.store.pipe(select(getUser))),
        switchMap( ([payload,user]: any) => this.blogService.updateBlog(payload.blog, user.uid))
        );

    @Effect({dispatch: false})
    deleted$ = this.actions$.pipe(
        ofType(BlogActionTypes.BlogDeleted),
        map( (action: fromBlogs.BlogDeleted) => action.payload),
        withLatestFrom(this.store.pipe(select(getUser))),
        switchMap( ([payload, user]: any) => this.blogService.deleteBlog(payload.blog, user))
    );

}

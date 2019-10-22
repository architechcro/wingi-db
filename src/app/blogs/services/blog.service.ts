import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentChangeAction} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import * as firebase from "firebase";
import {BlogModel} from "../models/blog.model";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor( private afs : AngularFirestore) { }
  getBlogs( uid : string): Observable<firebase.firestore.QuerySnapshot> {
    // const adult = await this.settings.getValue('adult') || false;
    return this.afs
        .collection('userblogs', ref =>
            ref
                .where('public', '==', true)
                .where('free', '==', true)
                .where('adult', '==', false)
                .where('owner','==', uid)
        )
        .get();
  }
  getSubcriptionBlogs(uid: string):Observable<DocumentChangeAction<firebase.firestore.DocumentData>[]> {
    return this.afs.collection('userdata').doc(uid).collection('subscriptions').snapshotChanges();
  }
  addBlog(blog: BlogModel, user: string) {
    return this.afs.collection('userblogs').doc(user).collection('blogs').add(blog);
  }
  updateBlog(blog: BlogModel, user: string) {
    return this.afs.collection('userblogs').doc(user).collection('blogs').doc(blog.id).set(blog, {merge: true});
  }
  deleteBlog(blog: BlogModel, user: string) {
    return this.afs.collection('userblogs').doc(user).collection('blogs').doc(blog.id).delete();
  }
}

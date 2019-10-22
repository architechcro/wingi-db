import { createSelector, createFeatureSelector } from '@ngrx/store';
import {BlogsState} from "./blogs.state";

export const getBlogState = createFeatureSelector<BlogsState>('blogs');

export const getBlogs = createSelector(
    getBlogState,
    blogs => blogs.blogs
);

export const blogsLoading = createSelector(
    getBlogState,
    blogs =>blogs.loading
);

export const blogError = createSelector(
    getBlogState,
    blogs=>blogs.error
);

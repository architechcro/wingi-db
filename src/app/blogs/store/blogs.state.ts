import {BlogModel} from "../models/blog.model";

export interface BlogsState {
    blogs: BlogModel[];
    loading: boolean;
    error: any;
}
export const blogsInitialState: BlogsState = {
    blogs: [],
    loading: false,
    error: null
};

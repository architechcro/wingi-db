
import { BlogActions, BlogActionTypes } from './blog.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: BlogActions): State {
  switch (action.type) {

    case BlogActionTypes.LoadBlogs:
      return Object.assign({}, state, {
        loading: true
      });

    case BlogActionTypes.BlogsLoaded:
      return Object.assign({}, state, {
        blogs: action.payload.blogs,
        loading: false
      });

    case BlogActionTypes.BlogError:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.Error
      });

    default:
      return state;
  }
}

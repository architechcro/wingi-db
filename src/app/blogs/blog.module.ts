import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlogRoutingModule} from './blog-routing.module';
import {EffectsModule} from '@ngrx/effects';
import {BlogEffects} from './store/blog.effects';
import {StoreModule} from '@ngrx/store';
import * as fromBlog from './store/blog.reducer';
import {BlogsComponent} from './components/blogs/blogs.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [BlogsComponent],
    imports: [
        CommonModule,
        BlogRoutingModule,
        EffectsModule.forFeature([BlogEffects]),
        StoreModule.forFeature('blog', fromBlog.reducer),
        SharedModule
    ]
})
export class BlogModule {
}

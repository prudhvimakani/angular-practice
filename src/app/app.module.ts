import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SingnupFormComponent } from './singnup-form/singnup-form.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule }  from '@angular/common/http';
import { PostService } from './services/post.service';
import { from } from 'rxjs';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SummaryPipe,
    FavoriteComponent,
    ContactFormComponent,
    SingnupFormComponent,
    PostComponent,
    NotfoundComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    
    RouterModule.forRoot([
      { path: '', component: SingnupFormComponent },
      { path: 'posts', component: PostComponent },
      { path: 'posts/:user', component: PostComponent },
      { path: 'contact', component: ContactFormComponent },
      { path: 'favorite', component: FavoriteComponent },
      { path: 'pipes', component: ServersComponent },
      { path: '**', component: NotfoundComponent }
    ])
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

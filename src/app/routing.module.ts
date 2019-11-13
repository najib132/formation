import { ProfilFollowerComponent } from './profil-follower/profil-follower.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes : Routes = [
    {path : "home" , component : HomeComponent},
    {path : "followers" , component : GithubFollowersComponent},
    {path : "followers/:id/:username" , component : ProfilFollowerComponent },
    {path : "posts" , component : PostsComponent},
    {path : "**" , component : PageNotFoundComponent}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
 
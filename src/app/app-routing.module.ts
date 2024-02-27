import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LookupComponent } from './lookup/lookup.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { GifComponent } from './gif/gif.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  {path:'',component:LookupComponent},
  {path:'results/:term',component:SearchresultsComponent},
  {path:'gif/:id',component:GifComponent},
  {path:'comment/:id',component:CommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

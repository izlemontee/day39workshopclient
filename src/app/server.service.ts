import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from './environments/environment';
import { last, lastValueFrom } from 'rxjs';
import { Comment } from './models';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private httpClient = inject(HttpClient)
  //baseUrl : string = environment.url
  baseUrl: string="/api"

  constructor() { }

  searchForGifsByTerm(term: string){
    //var url = this.baseUrl+"/gifs"
    var url = '/api'+'/gifs'
    const params = new HttpParams().set("term",term)
    console.log(url)
    return lastValueFrom(this.httpClient.get<any>(url,{params: params}))
  }

  searchForGifById(id:string){
    var url = this.baseUrl+"/gif/"+id
    return lastValueFrom(this.httpClient.get<any>(url))
  }

  addComment(comment:Comment){
    var url = this.baseUrl+"/gif/"+comment.id
    return lastValueFrom(this.httpClient.post<any>(url,comment))
  }
}

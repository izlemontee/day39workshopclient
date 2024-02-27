import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from '../server.service';
import { Gif } from '../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrl: './gif.component.css'
})
export class GifComponent implements OnInit{
  constructor(private activatedRoute: ActivatedRoute){

  }

  private serverService = inject(ServerService)
  private fb = inject(FormBuilder)
  private router = inject(Router)
  gif!:Gif
  id!:string



  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.id = id
    var promise$ = this.serverService.searchForGifById(id)
    promise$.then(
      value=>{
        this.gif = value
        console.log("result",value)
      }
    )
  }

  goToCommentForm(){
    this.router.navigate(["/comment",this.id])
  }

}

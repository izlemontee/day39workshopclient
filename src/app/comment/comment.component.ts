import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from '../server.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../models';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent implements OnInit{

  id!:string
  form!:FormGroup

  private serverService = inject(ServerService)
  private fb = inject(FormBuilder)
  private router = inject(Router)
  constructor(private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
      this.id = this.activatedRoute.snapshot.params["id"]
      this.form = this.createForm()
  }

  createForm():FormGroup{
    var group = this.fb.group({
      comment: this.fb.control<string>('',Validators.required)
    })
    return group
  }

  processForm(){
    var comment = this.form.value["comment"]
    var commentObject : Comment={
      comment:comment,
      id:this.id  
    }
    this.serverService.addComment(commentObject)

    this.router.navigate(["/gif",this.id])
    
  }

}

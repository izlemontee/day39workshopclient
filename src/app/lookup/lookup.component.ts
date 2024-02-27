import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServerService } from '../server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrl: './lookup.component.css'
})
export class LookupComponent implements OnInit,OnDestroy{

  private fb = inject(FormBuilder)
  private serverService = inject(ServerService)
  private router = inject(Router)

  form !: FormGroup

  ngOnInit(): void {
      this.form = this.createForm()
  }

  createForm():FormGroup{
    var group = this.fb.group({
      phrase:this.fb.control('',Validators.required)
    })
    return group
  }

  processForm(){
    var searchTerm = this.form.value["phrase"]
    console.log(searchTerm)
    // var promise$ = this.serverService.searchForGifsByTerm(searchTerm)
    // promise$.then(
    //   value=>{
    //     console.log(value)
    //   }
    // ).catch(
    //   ()=>console.log("error")
    // )
    this.router.navigate(["/results", searchTerm])
    
  }

  ngOnDestroy(): void {
      this.form.reset()
  }

}

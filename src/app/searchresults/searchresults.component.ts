import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from '../server.service';
import { SearchResult } from '../models';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrl: './searchresults.component.css'
})

export class SearchresultsComponent implements OnInit{

  private serverService = inject(ServerService)
  private router = inject(Router)
  searchTerm!:string

  results : SearchResult[] =[]

  constructor(private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
      const searchTerm = this.activatedRoute.snapshot.params['term']
      this.searchTerm = searchTerm
      var promise$ = this.serverService.searchForGifsByTerm(searchTerm)
      promise$.then(
        value=>{
          this.results = value
        }
      ).catch(
        ()=>console.log("error")
      )
  }

  onClick(id:string){
    this.router.navigate(["/gif",id])

  }


}

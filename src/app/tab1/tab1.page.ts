import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  peliculasNuevas: Pelicula[] = [];
  populares: Pelicula[] = [];
 
  constructor( private movieService: MoviesService ) {}

  ngOnInit(){
    
    this.movieService.getFeature()
    .subscribe(resp => {
      this.peliculasNuevas = resp.results;
    });

    this.getPopulares();
  }
    
    
  cargarMas(){
    this.getPopulares();
  }
  
  getPopulares(){
    this.movieService.getPopulares()
    .subscribe(resp => {
      const peliculasTemp = [...this.populares, ...resp.results];
      this.populares = peliculasTemp;
    });
  }



}

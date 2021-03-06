import { Injectable } from '@angular/core';//importación por defecto de angular
import { HttpClient } from '@angular/common/http';//importación por defecto de angular
import { Observable } from 'rxjs';//importación por defecto de angular
import { Movie } from 'src/app/models/movie.model';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  backUrl='http://localhost:3000/movies/';//la usamos para conectar con nuestro backend a traves de esta url
  public films: Movie[] = []
  /* films: object[];//creamos un objeto de array vacio que las coge todas */
  filmChoosen: object[];//creamos un objeto de array vacio que son las que elegimos
  //title: string;

  constructor(private httpClient:HttpClient) { }

  getMovies():Observable<any>{
    return this.httpClient.get(this.backUrl + 'allmovies')//en la siguiente direccion nos traemos todas las pelis
  }

  locateFilm(filmChoose:any):object{//funcion para localizar las peliculas que elegimos
    
    this.filmChoosen = filmChoose;
    console.log(this.filmChoosen);
    
    //ademas de ello, voy a guardar en localStorage la pelicula esscogida.
    
   
    
    return;
 }

 //esta funcion es la hija de buscaTitulo que se encuentra en header/header.components.ts
  buscaPeliculasTitulo(titulo:string):Observable<any>{//guardamos dentro de esta funcion la url/title mas el titulo de la pelicula
    return this.httpClient.get(this.backUrl + 'title/' + titulo);
  }

  buscaPeliculasId(id:number):Observable<any>{//guardamos dentro de esta funcion la url/title mas el titulo de la pelicula
    return this.httpClient.get(this.backUrl + 'id/' + id);
  }
  lastMovies():Observable<any> {
    return this.httpClient.get(this.backUrl + 'lastmovies/');
  }

  mostPopular():Observable<any> {
    return this.httpClient.get(this.backUrl + 'mostpopular/');
  }
  getByPage(page: number): Observable<Movie[]> {
    // const headers = new HttpHeaders();
    // headers.set('authorization', localStorage.getItem('authToken'));
    return this.httpClient.get<Movie[]>(this.backUrl + 'page/' + page);
  }
setFilms(films:Movie[]):void{
    
    this.films=films;
    console.log(this.films)

 }
 
getFilms():Movie[]{
    
    return this.films

 }

}



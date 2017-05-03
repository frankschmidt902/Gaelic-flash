import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';``

// Import RxJS required methods
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FlashCardService {
  flashCardsUrl: string
  themesUrl: string
  theme: any 
  name: string
  score: string

  constructor( private http:Http ) { 
    this.flashCardsUrl = "http://localhost:3000/flashcards/"
    this.themesUrl = "http://localhost:3000/themes"
  }

  setTheme(theme: any = {}): void {
    this.theme = theme
  }

  getAllThemes(): Observable<any> {
    return this.http.get(this.themesUrl)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
  }

  getFlashCard(id:number = 0): Observable<any> {
    return this.http.get(this.flashCardsUrl)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
  }

  getAllFlashCards(): Observable<any> {
    return this.http.get(this.flashCardsUrl)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
  }

  // prob gonna move to a score service 
  
  setName(userName:string = "unknown"): void {
    this.name = userName
  } 
  
  updateScore(increament:number = 0): void {
    this.score += increament
  }

}
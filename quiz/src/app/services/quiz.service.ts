import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Option } from './../models/option';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(" http://demo7538098.mockable.io/quizquestio");
  }

  getOptions(): Observable<Option[]> {
    return this.http.get<Option[]>("http://demo3245670.mockable.io/quizoptio");
  }

 



}

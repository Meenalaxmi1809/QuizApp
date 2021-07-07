import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Question } from '../models/question';
import { ProgressService } from '../services/progress.service';
import { Progress } from '../models/progress'
import { ToastrService } from 'ngx-toastr';
import { Option } from "../models/option";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quiz-stepper',
  templateUrl: './quiz-stepper.component.html',
  styleUrls: ['./quiz-stepper.component.css']
})
export class QuizStepperComponent implements OnInit,OnDestroy {
  isLinear = false;
  questions: Question[];
  fetchedResult = false;
  pageLoaded = false;
  quizSubscription: Subscription;
  selectedOptions: Array<Option> = new Array<Option>();
  duration: string;
  timer: any = null;
  startTime: Date;
  endTime: Date;
  ellapsedTime = '00:00';
  durations:300;
  selected:boolean;
  
  

  constructor(private quizService: QuizService, private progressService: ProgressService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getQuestions();
  }

  
  getQuestions() {
    this.quizSubscription = this.quizService.getQuestions().subscribe(result => {
      this.questions = result;
      this.pageLoaded = true;
      this.startTime = new Date();
      this.ellapsedTime = '00:00';
      this.timer = setInterval(() => { this.tick(); }, 1000);
      this.duration=this.parseTime(this.durations);
    },
      (error) => {
        this.pageLoaded = true;
        this.toastr.error("error in loading questions");
      }
      // ,()=>{
      //   this.pageLoaded = true;
      // }
      );
  }
  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    this.ellapsedTime = this.parseTime(diff);
  }
 

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

  showResult(step) {
    this.nextStep(step);
    this.fetchedResult = true;
    var correct = 0;
    var totalQuestions = this.questions.length;

    setTimeout(() => {

      for (let index = 0; index < this.selectedOptions.length; index++) {
        if (this.selectedOptions[index].isCorrectAnswer == true)
          correct++;
      }

      //tostr result
      if (correct == totalQuestions) {
        this.toastr.success(`congratulation!your score is: ${correct}/${totalQuestions} 
        Time taken is ${this.ellapsedTime}`);
      }
      else {
        this.toastr.info(`your score is: ${correct}/${totalQuestions} 
         Time taken is ${this.ellapsedTime}`);
      }
    }, 2000);
    
   
  }

 

  ngOnDestroy(): void {
    this.quizSubscription.unsubscribe();
  }
  /////////////////////////////Card Methods///////////////////////////////
  nextStep(step) {
    this.sendProgressInfo(step);
  }

  prevStep(step) {

    this.sendProgressInfo(step);
  }

  sendProgressInfo(step) {
    var progress = new Progress();
    progress.stepNumber = step;
    progress.totalSteps = this.questions.length;
    this.progressService.isProgressing.next(progress);
  }
  ///////////////////////Option Event/////////////////////////////////////

  selectOption(newOption) {

    let availableOption = this.checkAvailability(newOption);
  
  

    if (availableOption == undefined || availableOption.length == 0) { //if new option does not exist in list, add it to list
      this.selectedOptions.push(newOption);
    }
    else { //if exists and user change the answer, new answer will be overwrite on it

      const existedOption: any = this.selectedOptions.find(option => option.questionId == option.questionId)
      const existedOptionIndex: number = this.selectedOptions.indexOf(existedOption)

      if (existedOptionIndex !== -1) {
        this.selectedOptions.splice(existedOptionIndex, 1);
        this.selectedOptions.push(newOption);
      }

      let index = this.selectedOptions.indexOf(newOption);
      this.selectedOptions[index] = newOption;
    }

  }

  checkAvailability(item: Option) {
    return this.selectedOptions.filter(option => option.questionId == item.questionId);
  }
 


 
}

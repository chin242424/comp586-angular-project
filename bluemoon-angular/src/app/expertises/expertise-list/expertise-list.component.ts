import { Component, OnInit } from '@angular/core';
import {Expertise} from '../expertise';
import {ExpertiseService} from '../expertise.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-expertise-list',
  templateUrl: './expertise-list.component.html',
  styleUrls: ['./expertise-list.component.css']
})
export class ExpertiseListComponent implements OnInit {

  expertises: Expertise[];
  errorMessage: string;
  responseStatus: number;
  isInsert = false;

  constructor(private experService: ExpertiseService, private router: Router) {
    this.expertises = [];
  }

  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.experService.getExpertises().subscribe(
      expertises => this.expertises = expertises,
      error => this.errorMessage = error as any);
  }

  // tslint:disable-next-line:typedef
  gotoHome() {
    this.router.navigate(['/welcome']);
  }

}

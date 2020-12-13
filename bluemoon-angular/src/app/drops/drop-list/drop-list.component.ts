import {Component, Input, OnInit} from '@angular/core';
import {Drop} from '../drop';
import {Router} from '@angular/router';
import {DropService} from '../drop.service';

@Component({
  selector: 'app-drop-list',
  templateUrl: './drop-list.component.html',
  styleUrls: ['./drop-list.component.css']
})
export class DropListComponent implements OnInit {

  @Input() drops: Drop[];
  responseStatus: number;
  noDrops = false;
  errorMessage: string;

  constructor(private router: Router, private dropService: DropService) {
    this.drops = [];
  }

  // ngOnInit(): void {
  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
// tslint:disable-next-line:typedef
  editDrop(drop: Drop) {
    this.router.navigate(['/drops', drop.id, 'edit']);
  }

  // tslint:disable-next-line:typedef
  deleteDrop(drop: Drop) {
    this.dropService.deleteDrop(drop.id.toString()).subscribe(
      response => {
        this.responseStatus = response;
        console.log('delete success');
        this.drops.splice(this.drops.indexOf(drop), 1 );
        if (this.drops.length === 0) {
          this.noDrops = true;
        }
      },
      error => this.errorMessage = error as any);
  }

}

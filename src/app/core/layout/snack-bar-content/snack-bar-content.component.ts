import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LayoutState } from '../interfaces';
import { LayoutSelectors } from '../store';

@Component({
  selector: 'app-snack-bar-content',
  templateUrl: './snack-bar-content.component.html',
  styleUrls: ['./snack-bar-content.component.scss']
})
export class SnackBarContentComponent implements OnInit {


  getSnackBarText$ = this.store.select(LayoutSelectors.getSnackBarText)
  constructor(
    private store:Store<LayoutState>
  ) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LayoutState } from '../interfaces';
import { LayoutSelectors } from '../store';

@Component({
  selector: 'app-overlay-loading',
  templateUrl: './overlay-loading.component.html',
  styleUrls: ['./overlay-loading.component.scss']
})
export class OverlayLoadingComponent implements OnInit {


  constructor(
    private store:Store<LayoutState>
  ) { }
  overlayLoadingText$= this.store.select(LayoutSelectors.getOverlayLoadingText)

  ngOnInit(): void {
  }

}

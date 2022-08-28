import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { LayoutState } from '../interfaces';
import { LayoutSelectors } from '../store';
import {tap} from 'rxjs/operators'

@Component({
  selector: 'crx-page',
  styleUrls: ['./page.scss'],
  templateUrl: './page.html'
})
export class PageComponent {

  @Input() showBackground: boolean;
  toggleOverlayLoading$ = this.store.select(LayoutSelectors.getOverlayLoadingIsPresent)
  constructor(
    private store: Store<LayoutState>
  ) { }

}

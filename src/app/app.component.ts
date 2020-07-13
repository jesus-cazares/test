import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { SwalComponent, SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';

import { AppState } from './store';
import { NSCommonConstants } from './configs/common.constants';

@Component({
  selector: 'ng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('600ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('swalie') warningAlert: SwalComponent;
  browsers = NSCommonConstants.browsers;
  showMask = true;

  constructor(public readonly swalTargets: SwalPortalTargets, private store: Store<AppState>) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    setTimeout(() => { this.checkBrowser(); }, 1500);
  }

  private checkBrowser(): void {
    this.showMask = false;

    const agent = window.navigator.userAgent.toLowerCase();
    if (agent.indexOf('trident') > -1) {
      this.warningAlert.fire();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';

import { AlertMessage } from '../public-api';
import { NgSimpleAlertService } from './ng-simple-alert.service';

@Component({
  selector: 'lib-ng-simple-alert',
  template: `
    <div
      class="alert"
      *ngIf="alertMessage$ | async as alertMessage"
      [ngStyle]="{
        background: alertMessage.color
      }"
    >
      <span class="closebtn" (click)="closeAlert()">&times;</span>
      <strong>{{ getPrefix(alertMessage) }}!</strong>
      {{ getMessage(alertMessage) }}
    </div>
  `,
  styles: [],
})
export class NgSimpleAlertComponent implements OnInit {
  alertMessage$: Observable<AlertMessage | boolean>;
  close$ = new Subject<boolean>();

  constructor(private alertService: NgSimpleAlertService) {}

  ngOnInit() {
    this.alertMessage$ = merge(this.alertService.alertMessage$, this.close$);
  }

  closeAlert(): void {
    this.close$.next();
  }

  getPrefix(alertMessage: AlertMessage) {
    return alertMessage && alertMessage.prefix;
  }

  getMessage(alertMessage: AlertMessage) {
    return alertMessage && alertMessage.message;
  }
}

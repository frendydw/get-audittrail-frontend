import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Audittrail } from './audittrail';
import { AudittrailService } from './audittrail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  audittrails: Observable<Audittrail[]>;
  page: number;
  pageSize: number;
  startFrom: number;
  changeType: string;

  constructor(private audittrailService: AudittrailService,
              private router: Router) {
    this.changeType = 'ALL';
    this.startFrom = 0;
    this.page = 0;
    this.pageSize = 25;
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.audittrails = this.audittrailService.getAudittrailAll(this.page.toString(), this.pageSize.toString(), this.changeType);
  }

  numbers(startFrom: number): number[] {
    return [...Array(5).keys()].map(i => i + startFrom);
  }

  pagination(page: number) {
    this.page = page;
    this.reloadData();
  }

  nextPrevious(num: number) {
    this.startFrom += num;
    if (this.startFrom === -1) {
      this.startFrom += 1;
      return;
    }
    this.page += num;
    this.reloadData();
  }
}

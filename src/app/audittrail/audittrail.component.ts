import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Audittrail } from '../audittrail';
import { AudittrailService } from '../audittrail.service';

@Component({
  selector: 'app-audittrail',
  templateUrl: './audittrail.component.html',
  styleUrls: ['./audittrail.component.css']
})
export class AudittrailComponent implements OnInit{
  audittrails: Observable<Audittrail[]>;
  page: number;
  pageSize: number;
  startFrom: number;
  changeType: string;
  search: string;
  idMerchant: number;
  event: Audittrail[];

  constructor(private audittrailService: AudittrailService,
              private router: Router) {
    this.changeType = 'ALL';
    this.search = '';
    this.startFrom = 0;
    this.page = 0;
    this.pageSize = 25;
    this.idMerchant = 0;
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.audittrails = this.audittrailService.getAudittrailAll(this.page.toString(), this.pageSize.toString(),
      this.changeType, this.search, this.idMerchant.toString());
    console.log(this.audittrails.subscribe(event => this.event = event));

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

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

  constructor(private audittrailService: AudittrailService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.audittrails = this.audittrailService.getAudittrailList();
    this.audittrailService.getAudittrailList().subscribe(val => console.log(val))
  }
}

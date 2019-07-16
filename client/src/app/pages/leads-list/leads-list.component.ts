import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { LeadModel } from '../../models/lead.model';

@Component({
  selector: 'app-leads-list',
  templateUrl: './leads-list.component.html',
  styleUrls: ['./leads-list.component.scss']
})
export class LeadsListComponent implements OnInit {

  leads: LeadModel[];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get(environment.api_url + '/leads').subscribe((leads: LeadModel[]) => {
      this.leads = leads;
    });
  }

}

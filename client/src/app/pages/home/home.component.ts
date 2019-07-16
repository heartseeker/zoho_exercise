import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
  }

  signIn() {

    let params = new HttpParams();
    params = params.set('scope', 'ZohoCRM.modules.all');
    params = params.set('client_id', environment.client_id);
    params = params.set('response_type', 'code');
    params = params.set('access_type', 'offline');
    params = params.set('redirect_uri', environment.redirect_uri);

    const uri = 'https://accounts.zoho.com/oauth/v2/auth?' + params.toString();

    window.location.href = uri;
  }
}

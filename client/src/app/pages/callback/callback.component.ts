import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(query => {
      this.http.get(environment.api_url + '/saveleads').subscribe(res => {
        this.router.navigate(['/leads']);
      });
    });
  }

}

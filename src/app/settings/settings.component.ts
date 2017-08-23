import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { NgForm } from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import {URLSearchParams} from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'settings-cmp',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {

    private settingUrl = 'http://localhost:8081/';
    private settings = [];
	
    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router){
	   
    }

    ngOnInit() {
	    this.http.get(this.settingUrl+"setting/list").subscribe(result => {
		    console.log(result);
		    if(result['success']=="1"){
			   this.settings = result['settings'];
		    }
		});
    }
	
	update(){
	 
	}
}
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as _ from 'underscore';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import {URLSearchParams} from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'pages-cmp',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})

export class PagesComponent implements OnInit {
	
	private pagedetail;
	private pageid;
    private search = {
	   title:"",
       status:"",
       created_at:"",
       page:1,
       sortfield:'_id',     	
       sorttype:'asc'	 
    };
 
    private allItems: any; 
    private pageSize: any; 
    private currentPage = 1;
    private sortreverse = true;  
    
    pager: any = {};
  
    pagedItems: any[];
    
    private sectionTitle = 'Pages';
    private pageUrl = 'http://localhost:8081/';

    constructor(private http:HttpClient) { }

    ngOnInit() {
	  this.pagedetail = this.pageList("");	  
    }
	
	pageList(data){
	    if(data!=""){
            //alert("ch"); 		  
		    this.getPages(data);
	    }
	    else {		  
	        //alert("fg");
		    this.getPages(data)
	    }
    } 
  
    getPages(data){
		if(data!=""){		
		    //alert("fgvb");	  
			let params = new URLSearchParams();
			for(let key in data){
				params.set(key, data[key]) 
			}
			 
			return this.http.get(this.pageUrl+"page/index?"+params.toString()).subscribe(result => {
			   
			   this.pagedetail  = result['records'];
			   //this.allItems = result.totalrecords;
			   //this.pageSize = result.totalpages;
			   //this.setPage(this.currentPage);
		    }); 
		}
		else { 
		    
			return this.http.get(this.pageUrl+"page/index").subscribe(result => {
			   this.pagedetail  = result['records'];
			   //this.allItems = result.totalrecords;
			   //this.pageSize = result.totalpages;
			   //this.setPage(this.currentPage);
		    });
		}	  
    }
 
    deletePage(pageid){
		this.remove(pageid).subscribe(result => {
		    if(result['success']=="1"){
			  location.reload();
		    }		   
	    });
	}
	
	remove(pageid){
		return this.http.delete(this.pageUrl+"page/delete/"+pageid);
	}
}

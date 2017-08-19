import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs/Observable';
import * as _ from 'underscore';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import {URLSearchParams} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';
@Component({
    selector: 'users-cmp', 
    moduleId: module.id,
    templateUrl: 'user.component.html',  
	providers:[UserService] 
})

export class UsersComponent implements OnInit{
	private userdetail;
	private deleteuserid;
    private search = {
	   first_name:"",
       email:"",
       username:"",
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
    private userService:UserService;
    
    private sectionTitle = 'Users';
    private userUrl = 'http://localhost:8081/';
	
	constructor(private http: HttpClient) {    
        /*if(!userService.is_loggedin()){			
	       router.navigate(['./login']);
	    }*/	 
    }
  
    ngOnInit(){
		//alert("dd1");
		this.userdetail = this.userList("");
    }
	
	userList(data){
	    if(data!=""){
            //alert("ch"); 		  
		    this.getUsers(data);
	    }
	    else {		  
	        //alert("fg");
		    this.getUsers(data)
	    }
    } 
  
    getUsers(data){
		if(data!=""){		
		    //alert("fgvb");	  
			let params = new URLSearchParams();
			for(let key in data){
				params.set(key, data[key]) 
			}
			 
			return this.http.get(this.userUrl+"showusers?"+params.toString()).subscribe(result => {
			   
			   this.userdetail  = result['records'];
			   //this.allItems = result.totalrecords;
			   //this.pageSize = result.totalpages;
			   //this.setPage(this.currentPage);
		    }); 
		}
		else { 
		    
			return this.http.get(this.userUrl+"showusers").subscribe(result => {
			   this.userdetail  = result['records'];
			   //this.allItems = result.totalrecords;
			   //this.pageSize = result.totalpages;
			   //this.setPage(this.currentPage);
		    });
		}	  
    }
	
	deleteUserConfirm(uids){
		
	}
	
	sortlist(type){
		
	}

    deleteUser(deleteuserid){
	    this.removeUser(deleteuserid).subscribe(result => {
		    if(result['success']=="1"){
			   location.reload();
		    }		   
	    });
    }

    removeUser(id){
		return this.http.delete(this.userUrl+"delete/"+id); 	  	  
	}	
}

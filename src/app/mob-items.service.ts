import { Injectable } from '@angular/core';
import  {HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MobItemsService {
mobiles;
  constructor(public http:HttpClient) { }

  getMobiles(){
  	console.log("in the service")
this.http.get('http://localhost:8080/getitems').subscribe(data=>{
	this.mobiles=	 data;
	console.log("this.mobiles service", this.mobiles);
});
		return this.mobiles;


  }
}

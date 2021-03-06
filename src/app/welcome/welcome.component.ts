import { Component, OnInit } from '@angular/core';
import { AppGlobals } from '../app.global';
import { Router, ActivatedRoute } from '@angular/router';
import {MobItemsService} from '../mob-items.service';
import  {HttpClient} from  '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  //Need to get the data using serv/ice concept then remove this array
  cartCount = [];
  productList;
  param;
  mobiles;
  stars=[1,2,3,4,5]
  constructor(public appglobal: AppGlobals, public route: Router, private router: ActivatedRoute,
    public getmobiles:MobItemsService,public http:HttpClient) {
    this.productList = this.appglobal.productList;
    this.router.params.subscribe(params => params.id ? this.param = params.id : "");
    //New code on 23-06-2018
    this.http.get('/api/getitems').subscribe(data=>{
  this.productList=   data;
  console.log("this.mobiles component", this.productList);
});
    
  }

  ngOnInit() {
    this.cartCount = this.appglobal.cartProduts;
    //this.mobiles=this.getmobiles.getMobiles();
    //console.log("this.mobiles", this.mobiles);
    //console.log("this.getmobiles.getgetMobiles", this.getmobiles.getMobiles;

  }
  addCart(id) {
    if( this.appglobal.cartProduts.lastIndexOf(id)<=-1){
    this.appglobal.cartProduts.push(id);
    document.getElementsByClassName('cart-count')[0].classList.add('zoom');
    setTimeout(function(){
      document.getElementsByClassName('cart-count')[0].classList.remove('zoom')
      ; }, 1000);

    }else{
      this.route.navigate(['cart'])
    }
  }

  sortByPrice(a) {
    console.log(a)
    this.sortProducts(this.appglobal.productList,a.value)
  }

  sortProducts(items, order) {
    if (order == "LH") {
      items.sort(function (a, b) {
        return a.price - b.price;
      });
    } else {
      items.sort(function (a, b) {
        return b.price - a.price;
      });
    }



  }
  clearAll() {
    this.appglobal.cartProduts = [];
    this.route.navigate(["login"])
  }

  getStyle(category) {
    if (category == "block") {
      if (this.param) {
        return {
          'col-xs-12': true, 'col-md-12': true
        }
      } else {
        return {
          'col-xs-6': true, 'col-md-4': true

        }
      }
    } 
  }

  getPriceStyles(){
      if (this.param) {
        return {'col-xs-4': true, 'col-xs-offset-3': true}
      } else {
        return { 'col-xs-12': true, 'col-xs-offset-3': true, 'col-md-6': true, 'col-md-offset-0': true }


      }
    

  }
  getCartStyles(){
      if (this.param) {
        
        return {'col-xs-4': true, 'col-xs-offset-4': true,'col-md-12':true,'col-md-offset-3':true}
      } else {
        return { 'col-xs-12': true, 'col-xs-offset-0.5': true, 'col-md-6': true, 'col-md-offset-0': true }


      }
  }


  //For add cart div -- col-xs-12 col-xs-offset-0 col-md-4 col-md-offset-3
  //for add cart span--
  //For price div --col-xs-4 col-xs-offset-4 col-md-4 col-md-offset-0
}

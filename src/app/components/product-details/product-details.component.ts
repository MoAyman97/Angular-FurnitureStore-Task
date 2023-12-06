import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductInfo } from 'src/app/Models/product-info';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
currPrdId: number = 0;
product:ProductInfo | undefined;
indxList:number []=[];
currIndx:number =0;
constructor(private activatedRoute:ActivatedRoute , private prdService:ProductsService,private router:Router){}
ngOnInit(): void {
  //by Snapshot 
  // this.currPrdId = (this.activatedRoute.snapshot.paramMap.get('prdId'))?Number(this.activatedRoute.snapshot.paramMap.get('prdId')):0;
  // this.product=this.prdService.getProductByID(this.currPrdId)
 //by Observable
 this.activatedRoute.paramMap.subscribe(paramaps => {
  this.currPrdId=(paramaps.get('prdId')?Number(paramaps.get('prdId')):0)
  let currPrd=this.prdService.getProductByID(this.currPrdId)
  if(currPrd){
    this.product=currPrd;
  }
  else {
    this.router.navigate(['/Products'])
  }
 })
  this.indxList=this.prdService.getProductIndex();
  console.log(this.indxList);

}
backFun(){
  this.router.navigate(['/Products']);
}
prev(){
  this.currIndx = this.indxList.indexOf(this.currPrdId)
  this.router.navigate(['/details',this.indxList[--this.currIndx]])
  // console.log(this.currIndx);
  // this.router.navigate(['/details',this.indxList[--this.currIndx]]).then(() => {window.location.reload()});
}
next(){
  this.currIndx = this.indxList.indexOf(this.currPrdId)
  this.router.navigate(['/details',this.indxList[++this.currIndx]])
  // this.router.navigate(['/details',this.indxList[++this.currIndx]]).then(() => {window.location.reload()});
}
}

import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { ProductInfo } from 'src/app/Models/product-info';
import { Store } from 'src/app/Models/store';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  // productList: ProductInfo[];
  // category: Icategory[];
  clientName: string = 'Mohamed';
  toogler: boolean = true;
  date = new Date();
  filteredPrd: ProductInfo[] = [];
  @Input ()set listFilterChild(value: number) {
    this.filteredPrd = this.productService.performFilter(value);
  }
  @Input ()set priceFilterChild(value: number) {
    this.filteredPrd = this.productService.priceFilter(value);
  }

  constructor(public productService: ProductsService , private router: Router) {
    // (this.productList = [
    //   {
    //     id: 4,
    //     name: 'Anders Glass Top Coffee Table',
    //     price: 9999,
    //     quantity: 4,
    //     categoryId: 2,
    //     material: 'Wood',
    //     creditCard:"1234232254443212",
    //     prdImgUrl:
    //       'https://media.homecentre.com/i/homecentre/165097472-165097472-HC21122022_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
    //   },
    //   {
    //     id: 5,
    //     name: 'Solo Wooden Top Coffee Table',
    //     price: 3000,
    //     quantity: 7,
    //     categoryId: 2,
    //     material: 'Wood',
    //     creditCard:"1234232254443212",
    //     prdImgUrl:
    //       'https://media.homecentre.com/i/homecentre/163906871-163906871-HC13042022_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
    //   },
    //   {
    //     id: 6,
    //     name: 'Kansas 8-Seater Dining Table',
    //     price: 8500,
    //     quantity: 2,
    //     categoryId: 2,
    //     material: 'Wood',
    //     creditCard:"1234232254443212",
    //     prdImgUrl:
    //       'https://media.homecentre.com/i/homecentre/164881862-164881862-HC29092022_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
    //   },
    //   {
    //     id: 7,
    //     name: 'Meadow Wooden Top Side Table',
    //     price: 2500,
    //     quantity: 12,
    //     categoryId: 2,
    //     material: 'Wood',
    //     creditCard:"1234232254443212",
    //     prdImgUrl:
    //       'https://media.homecentre.com/i/homecentre/160085077-160085077-HCB1443MAR18_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
    //   },
    //   {
    //     id: 2,
    //     name: 'Aria 2-Seater Velvet Sofa',
    //     price: 13500,
    //     quantity: 3,
    //     categoryId: 3,
    //     material: 'Solid Wood',
    //     creditCard:"1234232254443212",
    //     prdImgUrl:
    //       'https://media.homecentre.com/i/homecentre/163894769-163894766-HC13062022_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
    //   },
    //   {
    //     id: 3,
    //     name: 'Rhode 2-Seater Fabric Sofa',
    //     price: 3000,
    //     quantity: 8,
    //     categoryId: 3,
    //     material: 'Solid Wood',
    //     creditCard:"1234232254443212",
    //     prdImgUrl:
    //       'https://media.homecentre.com/i/homecentre/165169086-165169086-HC17012023_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
    //   },
    //   {
    //     id: 8,
    //     name: 'Carmel 3-Seater Velvet Sofa Bed',
    //     price: 16500,
    //     quantity: 15,
    //     categoryId: 3,
    //     material: 'Solid Wood',
    //     creditCard:"1234232254443212",
    //     prdImgUrl:
    //       'https://media.homecentre.com/i/homecentre/163710693-163710693-HC23082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
    //   },
    //   {
    //     id: 9,
    //     name: 'Captus Fabric Reversible Sofa',
    //     price: 28500,
    //     quantity: 0,
    //     categoryId: 3,
    //     material: 'Solid Wood',
    //     creditCard:"1234232254443212",
    //     prdImgUrl:
    //       'https://media.homecentre.com/i/homecentre/162619145-162619145-HC17092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
    //   },
    //   {
    //     id: 10,
    //     name: 'Fabio King Bed ',
    //     price: 16000,
    //     quantity: 8,
    //     categoryId: 5,
    //     material: 'Engineered Wood',
    //     creditCard:"1234232254443212",
    //     prdImgUrl:
    //       'https://media.homecentre.com/i/homecentre/162818471-162818471-HC25102020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
    //   },
    //   {
    //     id: 12,
    //     name: 'Pinewood Queen Bed',
    //     price: 15000,
    //     quantity: 6,
    //     categoryId: 5,
    //     material: 'Solid Wood',
    //     creditCard:"1234232254443212",
    //     prdImgUrl:
    //       'https://media.homecentre.com/i/homecentre/164560702-164560702-HC05092022_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
    //   },
    //   {
    //     id: 13,
    //     name: 'Stark King Bed',
    //     price: 15500,
    //     quantity: 5,
    //     categoryId: 5,
    //     material: 'Engineered Wood',
    //     creditCard:"1234232254443212",
    //     prdImgUrl:
    //       'https://media.homecentre.com/i/homecentre/164959835-164959835-HC12122022_01-2100.jpeg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
    //   },
    //   {
    //     id: 17,
    //     name: 'Pinewood King Bed',
    //     price: 18000,
    //     quantity: 3,
    //     categoryId: 5,
    //     material: 'Solid Wood',
    //     creditCard:"1234232254443212",
    //     prdImgUrl:
    //       'https://media.homecentre.com/i/homecentre/164074807-164074807-HC26042022_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
    //   },
    // ]),
      // (this.category = [
      //   {
      //     ID: 2,
      //     name: 'Table',
      //   },
      //   {
      //     ID: 3,
      //     name: 'Sofa',
      //   },
      //   {
      //     ID: 5,
      //     name: 'Bed',
      //   },
      // ]);
  }

  store: Store = new Store(
    'Ifurniture',
    ['sohag', 'cairo', 'alexandria'],
    'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/294518105/original/9ccc25635f75ef3a4d8f2fc33b9e81d12c98b72d/design-awesome-furniture-logo.jpg'
  );
  
  ngOnInit(): void {
    // this.filteredPrd = this.productList;
    this.filteredPrd=this.productService.getAllProducts();
  }
  

  showImg(): void {
    this.toogler = !this.toogler;
  }
  // performFilter(filterValue: number): ProductInfo[] {
  //   if(filterValue>0){
  //     return this.productList.filter((prd:ProductInfo) => prd.categoryId == filterValue)
  // }
  // return this.productList
  // }

  // priceFilter(filterValue: number): ProductInfo[] {
  //   if(filterValue>0){
  //     if(filterValue==1){
  //       return this.productList.filter((prd:ProductInfo) => prd.price<5000)
  //     }
  //     else if(filterValue==2){
  //       return this.productList.filter((prd:ProductInfo) => prd.price>=5000 && prd.price<=15000)
  //     }
  //      else if(filterValue==3){
  //        return this.productList.filter((prd:ProductInfo) => prd.price>15000)
  //     }  
      
  // }
  // return this.productList
  // }

  decreaseCount(id: number): void {
    this.productService.productList.find((p) =>{ if(p.id === id) p.quantity -= 1;}) ;
    
  }
  @Output () newPrdEvent:EventEmitter<ProductInfo> = new EventEmitter<ProductInfo>();
  addToCart(product: ProductInfo) {
    // console.log(product);
    this.newPrdEvent.emit(product)
    
  }
  prdDetails(prdId: Number){
    this.router.navigate(['/details', prdId])
  }
}

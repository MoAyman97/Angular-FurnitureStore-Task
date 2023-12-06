import { Injectable } from '@angular/core';
import { ProductInfo } from '../Models/product-info';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productList: ProductInfo[];
  constructor() { 
    (this.productList = [
      {
        id: 4,
        name: 'Anders Glass Top Coffee Table',
        price: 9999,
        quantity: 4,
        categoryId: 2,
        material: 'Wood',
        creditCard:"1234232254443212",
        details:"This coffee table is a tailor-made piece for modern interiors and decors. The tabletop is constructed from solid wood and has sleek legs that boast a refined finish. The highlight of the table is the contrasting tones that give it a heightened outlook. Wipe clean for upkeep.",
        prdImgUrl:
          'https://media.homecentre.com/i/homecentre/165097472-165097472-HC21122022_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
      },
      {
        id: 5,
        name: 'Solo Wooden Top Coffee Table',
        price: 3000,
        quantity: 7,
        categoryId: 2,
        material: 'Wood',
        creditCard:"1234232254443212",
        details:"This coffee table is a tailor-made piece for modern interiors and decors. The tabletop is constructed from solid wood and has sleek legs that boast a refined finish. The highlight of the table is the contrasting tones that give it a heightened outlook. Wipe clean for upkeep.",
        prdImgUrl:
          'https://media.homecentre.com/i/homecentre/163906871-163906871-HC13042022_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
      },
      {
        id: 6,
        name: 'Kansas 8-Seater Dining Table',
        price: 8500,
        quantity: 2,
        categoryId: 2,
        material: 'Wood',
        creditCard:"1234232254443212",
        details:"Opt for this eight-setaer dining table for a comfortable dining experience. It features a perfect finish and is light and steady to use. Well-crafted from engineered wood, this table will provide optimal durability in your dining room.        ",
        prdImgUrl:
          'https://media.homecentre.com/i/homecentre/164881862-164881862-HC29092022_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
      },
      {
        id: 7,
        name: 'Meadow Wooden Top Side Table',
        price: 2500,
        quantity: 12,
        categoryId: 2,
        material: 'Wood',
        creditCard:"1234232254443212",
        details:"A sleek and stylish pick for your home, this end table showcases a square-shaped design and is made from solid beech wood. Owing to its delicate appeal, this end table can be placed in any part of your home to serve as a platform for aesthetically pleasing objects or accent pieces.",
        prdImgUrl:
          'https://media.homecentre.com/i/homecentre/160085077-160085077-HCB1443MAR18_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
      },
      {
        id: 2,
        name: 'Aria 2-Seater Velvet Sofa',
        price: 13500,
        quantity: 3,
        categoryId: 3,
        material: 'Solid Wood',
        creditCard:"1234232254443212",
        details:"Showcasing a dark trendy colour and design, this sofa is ideal for relaxing after a long day. Featuring a thickly cushioned backrest and armrest, this sofa is a great choice for your living space. The velvet upholstery and wooden legs ensure durability and match well with your other home furniture.",
        prdImgUrl:
          'https://media.homecentre.com/i/homecentre/163894769-163894766-HC13062022_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
      },
      {
        id: 3,
        name: 'Rhode 2-Seater Fabric Sofa',
        price: 3000,
        quantity: 8,
        categoryId: 3,
        material: 'Solid Wood',
        creditCard:"1234232254443212",
        details:"Defined by its boxy silhouette and plush, woven fabric upholstery, this three-seater sofa is apt for your sophisticated home. The gold plinth across the base gives a distinct appeal, while the pocket spring, polyurethane foam, polyester fibre and non-woven bag filing give additional comfort to the seating. ",
        prdImgUrl:
          'https://media.homecentre.com/i/homecentre/165169086-165169086-HC17012023_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
      },
      {
        id: 8,
        name: 'Carmel 3-Seater Velvet Sofa Bed',
        price: 16500,
        quantity: 15,
        categoryId: 3,
        material: 'Solid Wood',
        creditCard:"1234232254443212",
        details:"Create a retro-classic look for your living room area with this three-seater sofa bed. Supported by a solid wooden frame that adds to its durability, the piece has fixed cushions and a spring base that guarantees the utmost comfort and stability. Also, the velvet upholstery and the button-tufted surfaces add value to the piece and offer it a distinguished flair",
        prdImgUrl:
          'https://media.homecentre.com/i/homecentre/163710693-163710693-HC23082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
      },
      {
        id: 9,
        name: 'Captus Fabric Reversible Sofa',
        price: 28500,
        quantity: 0,
        categoryId: 3,
        material: 'Solid Wood',
        creditCard:"1234232254443212",
        details:"Designed to double up as a bed, this three-seater sofa is a practical addition to your living room and can be used for seating and sleeping. Adding to the overall functionality is the in-built storage in the chaise that can be utilized to keep bedding accessories underneath. The convertible chaise can be easily moved to the right or the left to suit your room setup",
        prdImgUrl:
          'https://media.homecentre.com/i/homecentre/162619145-162619145-HC17092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
      },
      {
        id: 10,
        name: 'Fabio King Bed',
        price: 16000,
        quantity: 8,
        categoryId: 5,
        material: 'Engineered Wood',
        creditCard:"1234232254443212",
        details:"Cosy up with this king-sized bed featuring a contemporary design and tufted headboard. Showcasing a fine engineered wood crafting and, this king-sized bed makes for an appealing bedroom furniture unit. You can spot clean this plush unit for its upkeep.",
        prdImgUrl:
          'https://media.homecentre.com/i/homecentre/162818471-162818471-HC25102020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
      },
      {
        id: 12,
        name: 'Pinewood Queen Bed',
        price: 15000,
        quantity: 6,
        categoryId: 5,
        material: 'Solid Wood',
        creditCard:"1234232254443212",
        details:"Bring home this elegant-looking bed and leave your guests spellbound. The minimalistic design and textured detail of the headboard make it comfortable to rest on and further completes the look of your bedroom. Crafted from pine wood with a painted finish, this bed can be maintained with ease.",
        prdImgUrl:
          'https://media.homecentre.com/i/homecentre/164560702-164560702-HC05092022_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
      },
      {
        id: 13,
        name: 'Stark King Bed',
        price: 15500,
        quantity: 5,
        categoryId: 5,
        material: 'Engineered Wood',
        creditCard:"1234232254443212",
        details:"Showcasing a simple yet practical design, this king-size bed is apt for your sophisticated home settings. Finely crafted from engineered wood, this durable unit has a groove-detailed bed board support system and contrasting sturdy metal legs. It is well-finished with a water-based painting for fuss-free maintenance.",
        prdImgUrl:
          'https://media.homecentre.com/i/homecentre/164959835-164959835-HC12122022_01-2100.jpeg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
      },
      {
        id: 17,
        name: 'Pinewood King Bed',
        price: 18000,
        quantity: 3,
        categoryId: 5,
        material: 'Solid Wood',
        creditCard:"1234232254443212",
        details:"Bring home this elegant-looking bed and leave your guests spellbound. The minimalistic design and textured detail of the headboard make it comfortable to rest on and further completes the look of your bedroom. Crafted from pine wood with a painted finish, this king-size bed can be spot cleaned for upkeep.",
        prdImgUrl:
          'https://media.homecentre.com/i/homecentre/164074807-164074807-HC26042022_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
      },
    ])
  }

  getAllProducts(){
    return this.productList;
  }

  performFilter(filterValue: number): ProductInfo[] {
    if(filterValue>0){
      return this.productList.filter((prd:ProductInfo) => prd.categoryId == filterValue)
  }
  return this.productList
  }

  priceFilter(filterValue: number): ProductInfo[] {
    if(filterValue>0){
      if(filterValue==1){
        return this.productList.filter((prd:ProductInfo) => prd.price<5000)
      }
      else if(filterValue==2){
        return this.productList.filter((prd:ProductInfo) => prd.price>=5000 && prd.price<=15000)
      }
       else if(filterValue==3){
         return this.productList.filter((prd:ProductInfo) => prd.price>15000)
      }  
      
  }
  return this.productList
  }
  getProductByID(prdID : number) : ProductInfo | undefined {
    return this.productList.find(prd => prd.id == prdID);
  }
  // getProductsByCatID(cateID : number ) : IProduct[] {
  //   return this.productList.filter(prd => prd.categoryID == cateID)
  // }
  getProductIndex(): number[] {
    return this.productList.map(prd => prd.id);

  }
}

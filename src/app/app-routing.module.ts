import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProductParentComponent } from './components/product-parent/product-parent.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import { RoutesGroupComponent } from './components/routes-group/routes-group.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  // {path:"main",component:RoutesGroupComponent,children:[// ]}
  {path:'',redirectTo:'/home',title:'homepage',pathMatch:'full'},
  {path:'home',component:MainComponent,title:'homepage'},
  {path:'Products',component:ProductsComponent,title:'Products'},
  {path:'ProductSearch',component:ProductParentComponent,title:'Search'},
  {path:'aboutus',component:AboutComponent,title:'about us page'},
  {path:'contactus',component:ContactUsComponent,title:'contact us page'},
  {path:'details/:prdId',component:ProductDetailsComponent,title:'Product Details'},
  {path: 'user', loadChildren: () => import('src/app/components/user/user.module').then(m => m.UserModule)},
  {path:'**',component:NotFoundComponent,title:'not found page'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

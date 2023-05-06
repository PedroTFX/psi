import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemSearchComponent } from './item-search/item-search.component';
import { ItemComponent } from './item/item.component';
import { LibraryComponent } from './library/library.component';

const routes: Routes = [
	{ path: 'create-account', component: CreateAccountComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'profile', component: DashboardComponent },
	{ path: 'item/:id', component: ItemComponent},
	{ path: 'search', component: ItemSearchComponent },
	{ path: 'library', component: LibraryComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

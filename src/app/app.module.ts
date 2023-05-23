import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemSearchComponent } from './item-search/item-search.component';
import { ItemComponent } from './item/item.component';
import { LibraryComponent } from './library/library.component';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { ItemPreviewComponent } from './item-preview/item-preview.component';
import { PurchasePreviewComponent } from './purchase-preview/purchase-preview.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		CreateAccountComponent,
		LoginComponent,
		DashboardComponent,
		ItemSearchComponent,
		ItemComponent,
		ItemComponent,
		LibraryComponent,
		ListComponent,
		ProfileComponent,
		ItemPreviewComponent,
  PurchasePreviewComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

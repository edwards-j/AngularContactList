import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutes } from './routes';

import { AppComponent } from './app.component';
import { UserService } from './user-service.service';
import { DetailsComponent } from './details/details.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [AppComponent, DetailsComponent, UserListComponent, NewUserComponent, EditUserComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(AppRoutes)],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}

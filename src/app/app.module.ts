import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ServerService } from './servers.service'
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { routes } from './app.router';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from './../environments/environment';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { SigninComponent } from './signin/signin.component';
import { SummaryComponent } from './summary/summary.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  
    AboutComponent,
    ContactComponent,
    HomeComponent,
    SigninComponent,
    SummaryComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    HttpModule,
    routes,
    AngularFireModule.initializeApp(environment.firebase,'angularfs'),
    AngularFirestoreModule

  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})


export class AppModule { }

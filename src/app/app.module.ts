import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { INITIAL_STATE, appState, Reducer} from './store';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<appState>) {           
    ngRedux.configureStore(Reducer, INITIAL_STATE);     //create store krto
  } 
}

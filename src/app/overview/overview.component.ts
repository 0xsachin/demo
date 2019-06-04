import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
//import { appToDo } from '../todo';
import { appState } from '../store';
//import { Add, Delete, Update } from '../actions';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private ngRedux: NgRedux<appState>) {

   }

  ngOnInit() {
    this.displayList = this.ngRedux.getState();
  }
  Unsubscribe = this.ngRedux.subscribe(this.renderData.bind(this));
  model = {
    id: 0,
    name: '',
  }
  displayList;
  editFlag = false;
  editId;

  renderData(){
    this.displayList = this.ngRedux.getState();
    localStorage.setItem("data",JSON.stringify(this.ngRedux.getState()));
  }
  saveData() {
    this.model.id = Math.floor(Math.random()*10000);
    this.ngRedux.dispatch({type: "Add", dataObj: this.model});
    this.model.id = 0;
    this.model.name = "";
  }

  deleteData(data){
    console.log("SelectedData--->",data);
    this.ngRedux.dispatch({type: "Delete", dataObj: data.id});
  }
  editData(data){
    
    //this.ngRedux.dispatch({type: "Edit", dataObj: id});
    if(data && !this.editFlag){
      this.model.name = data.name;
      this.model.id = data.id;
      this.editFlag = true;
      this.editId = data.id;
      console.log("Old Data--->",this.model);
    }
    else{
      this.editFlag = false;
      this.model.id = this.editId;
      console.log("New Data--->",this.model);
      this.ngRedux.dispatch({type: "Edit", dataObj: this.model});
      this.model.id = 0;
      this.model.name = "";

    }
    
  }

}

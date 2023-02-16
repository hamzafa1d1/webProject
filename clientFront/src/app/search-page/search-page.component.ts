import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import {NgxMatTimepickerModule, NgxMatTimepickerDirective, NgxMatTimepickerComponent} from "ngx-mat-timepicker";
import{SearchService} from "../services/searchService/search-service.service";
import {StatesCitiesStationsService} from "../services/statesCitiesStationsService/states-cities-stations.service";
import {lastValueFrom, map, of, switchMap} from "rxjs";
import {State} from "../model/statesCitiesStations/states.model";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})



export class SearchPageComponent implements OnInit{
  showInput: boolean = true;
  busses = [
    {
      bus_name: 'bus1',
      bus_plate: 'matricule1',
      rate: 'rate1',
      mappath:
        'https://img.freepik.com/free-vector/double-decker-bus-concept-illustration_114360-11580.jpg?w=2000',
      reviews: {},
      capacity: 'capacity1',
    },
    {
      bus_name: 'bus2',
      bus_plate: 'matricule2',
      rate: 'rate2',
      mappath:
        'https://img.freepik.com/free-vector/double-decker-bus-concept-illustration_114360-11580.jpg?w=2000',
      reviews: {},
      capacity: 'capacity2',
    },
    {
      bus_name: 'bus3',
      bus_plate: 'matricule3',
      rate: 'rate3',
      mappath:
        'https://img.freepik.com/free-vector/double-decker-bus-concept-illustration_114360-11580.jpg?w=2000',
      reviews: {},
      capacity: 'capacity3',
    },
    {
      bus_name: 'bus3',
      bus_plate: 'matricule4',
      rate: 'rate4',
      mappath:
        'https://img.freepik.com/free-vector/double-decker-bus-concept-illustration_114360-11580.jpg?w=2000',
      reviews: {},
      capacity: 'capacity4',
    },
    {
      bus_name: 'bus3',
      bus_plate: 'matricule4',
      rate: 'rate4',
      mappath:
        'https://img.freepik.com/free-vector/double-decker-bus-concept-illustration_114360-11580.jpg?w=2000',
      reviews: {},
      capacity: 'capacity4',
    },
    {
      bus_name: 'bus3',
      bus_plate: 'matricule4',
      rate: 'rate4',
      mappath:
        'https://img.freepik.com/free-vector/double-decker-bus-concept-illustration_114360-11580.jpg?w=2000',
      reviews: {},
      capacity: 'capacity4',
    },
    {
      bus_name: 'bus3',
      bus_plate: 'matricule4',
      rate: 'rate4',
      mappath:
        'https://img.freepik.com/free-vector/double-decker-bus-concept-illustration_114360-11580.jpg?w=2000',
      reviews: {},
      capacity: 'capacity4',
    },
    {
      bus_name: 'bus3',
      bus_plate: 'matricule4',
      rate: 'rate4',
      mappath:
        'https://img.freepik.com/free-vector/double-decker-bus-concept-illustration_114360-11580.jpg?w=2000',
      reviews: {},
      capacity: 'capacity4',
    },
    {
      bus_name: 'bus3',
      bus_plate: 'matricule4',
      rate: 'rate4',
      mappath:
        'https://img.freepik.com/free-vector/double-decker-bus-concept-illustration_114360-11580.jpg?w=2000',
      reviews: {},
      capacity: 'capacity4',
    },
    {
      bus_name: 'bus3',
      bus_plate: 'matricule4',
      rate: 'rate4',
      mappath:
        'https://img.freepik.com/free-vector/double-decker-bus-concept-illustration_114360-11580.jpg?w=2000',
      reviews: {},
      capacity: 'capacity4',
    },
    {
      bus_name: 'bus3',
      bus_plate: 'matricule4',
      rate: 'rate4',
      mappath:
        'https://img.freepik.com/free-vector/double-decker-bus-concept-illustration_114360-11580.jpg?w=2000',
      reviews: {},
      capacity: 'capacity4',
    },
    {
      bus_name: 'bus3',
      bus_plate: 'matricule4',
      rate: 'rate4',
      mappath:
        'https://img.freepik.com/free-vector/double-decker-bus-concept-illustration_114360-11580.jpg?w=2000',
      reviews: {},
      capacity: 'capacity4',
    },
  ];

  public searchData:any  ;
  public busTimes: any ;

  endStates : any  ;
  endCities : any ;
  endStations : any ;
  startStates : any  ;
  startCities : any ;
  startStations : any ;
  breakpoint: number | undefined;
  public form! : FormGroup ;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private formBuilder: FormBuilder ,
    private searchService : SearchService ,
    private sCSService : StatesCitiesStationsService
  ) {}

  data: any;
    ngOnInit() {
      this.form = this.formBuilder.group({
        startState: new FormControl([] , Validators.required) ,
        startCity: new FormControl([],Validators.required),
        startStation: new FormControl([],Validators.required),
        endState: new FormControl([],Validators.required),
        endCity: new FormControl([],Validators.required),
        endStation: new FormControl([],Validators.required),
        time: new FormControl("09:00", Validators.required)
      }) ;
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.breakpoint = 1;
      } else if (result.breakpoints[Breakpoints.Small]) {
        this.breakpoint = 2;
      } else if (result.breakpoints[Breakpoints.Medium]) {
        this.breakpoint = 3 ;
      } else if (result.breakpoints[Breakpoints.Large]) {
        this.breakpoint = 4;
      } else if (result.breakpoints[Breakpoints.XLarge]) {
        this.breakpoint = 4;
      }
    });

     const data =  this.sCSService.getStatesCitiesStations() ;
     data.subscribe(res =>{
       let mySet = new Set<String> ;
       this.data = res ;
       for( let state in this.data){
         mySet.add(state) ;
       }
       this.startStates= this.endStates =mySet ;
     })

   }
  updateStartCities (){
    const state = this.form.get('startState')!.value ;
    let mySet = new Set<String> ;
    for(let city in this.data[state]){
      mySet.add(city) ;
    }
    this.startCities = mySet;
  }
  updateStartStations(){
    const city = this.form.get("startCity")!.value ;
    const state = this.form.get("startState")!.value ;
    let statee = this.data[state];
    this.startStations = Object.values(statee[city]) ;

  }

  updateEndCities (){
    const state = this.form.get('endState')!.value ;
    let mySet = new Set<String> ;
    for(let city in this.data[state]){
      mySet.add(city) ;
    }
    this.endCities = mySet;

  }
  updateEndStations(){
    const city = this.form.get("endCity")!.value ;
    const state = this.form.get("endState")!.value ;
    let statee = this.data[state];
    this.endStations = Object.values(statee[city]) ;

  }
  onSubmit() {
    if (this.form.valid) {

      this.searchService.getSearchData( this.form.value ).subscribe(
        res => {
          this.searchData = Array.isArray(res) ? res : Object.values(res);
          this.busTimes = Array.isArray(res) ? res : Object.keys(res);
          const map = new Map(Object.entries(res));
        }
      )
    } else {
       console.log("empty" + this.form.valid) ;
    }
  }
}

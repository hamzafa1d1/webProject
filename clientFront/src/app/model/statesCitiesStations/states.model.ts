export interface Station {
  station: string;
}

export interface City {
  city: string;
  stations: Station[];
}


export interface State {
  state :String;
  cities: City[] ;

}

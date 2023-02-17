export class BusModel {
  busName: String ;
  busPlate: String ;
  capacity: number ;
  imagePath: String ;
  time: String ;

  constructor(busName: String, busPlate: String, capacity: number, imagePath:String , time : String ) {
    this.busName = busName;
    this.busPlate = busPlate;
    this.capacity = capacity;
    this.imagePath = imagePath;
    this.time = time ;
  }
}

export interface CoworkingspaceItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    telephone_number: string,
    opentime: string,
    closetime: string,
    picture: string,
    __v: number,
    id: string,
    star: number
  }
  
  export  interface CoworkingspaceJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CoworkingspaceItem[]
  }

export interface ReservationItem {
    user:string;
    coworkingId:string;
    coworkingName: string;
    reservationDate?: string;
    timereservation: string;
}

export interface User {
  name:string,
  email:string,
  telephone_number:string,
  password:string
}
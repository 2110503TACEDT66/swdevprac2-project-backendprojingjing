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

export interface ReservationItem{
    name: string;
    id: string;
    cowork:string | null;
    ReservationStartDate: string;
    ReservationStartTime: string;
    ReservationEndDate: string;
    ReservationEndTime: string;
    duration: number;
}
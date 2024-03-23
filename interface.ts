interface CoworkingspaceItem {
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
    id: string
  }
  
  interface CoworkingspaceJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CoworkingspaceItem[]
  }
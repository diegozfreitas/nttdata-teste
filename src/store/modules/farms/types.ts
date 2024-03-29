export interface IFarm {
  id: string;
  producerName: string;
  document: string
  farmName: string;
  city: string;
  state: string;
  totalArea: number;
  arableArea: number;
  vegetationArea: number;
  cultures: string | any;
}

export interface IFarmState {
  items: IFarm[];
}

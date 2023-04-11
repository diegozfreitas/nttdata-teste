export interface FormData {
  document: string;
  producerName: string;
  farmName: string;
  city: string;
  totalArea: number;
  arableArea: number;
  vegetationArea: number;
  cultures: any;
  state: any;
}

export interface ResponseStatesReq {
  id: number;
  nome: string;
  regiao: {
    id: number;
    nome: string;
    sigla: string;
  };
  sigla: string;
}

export interface StatesProps {
  value: string;
  label: string;
}
export interface CitiesProps {
  value: string;
  label: string;
}

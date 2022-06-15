export interface FormData {
  document: string;
  producerName: string;
  farmName: string;
  city: string;
  totalArea: number;
  arableArea: number;
  vegetationArea: number;
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


import axios from "axios";
import { ResponseStatesReq } from "../Pages/Register/types";

export const listsStates: any = async () => {
  const result: { data: ResponseStatesReq[] } = await axios.get(
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
  );

  const formattedStates = result?.data.map((item: ResponseStatesReq) => {
    return { value: String(item.id), label: item.nome };
  });

  await localStorage.setItem("states", JSON.stringify(formattedStates));

  return JSON.stringify(formattedStates);
};

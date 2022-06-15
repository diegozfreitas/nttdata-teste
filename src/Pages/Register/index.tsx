import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

import { Layout } from "../../components/Layout";
import { InputRHF } from "../../components/FormRHF/InputRHF";
import { Select } from "../../components/Form/Select";
import { Checkbox } from "../../components/Form/Checkbox";
import { Button } from "../../components/Button";

import { ContainerCropsPlanted, CropsPlantedChecks, LabelError } from "./style";
import { plantationOptions } from "../../Utils/plantationOptions";

import { ValidationsSchema } from "./validationForm";

import { SaveFarm, UpdateFarm } from "../../store/modules/farms/actions";
import { IState } from "../../store";
import { IFarm } from "../../store/modules/farms/types";

import { FormData, ResponseStatesReq, StatesProps } from "./types";
import { SelectRHF } from "../../components/FormRHF/SelectRHF";

export const Register = () => {
  const [states, setStates] = useState<StatesProps[]>([]);
  const [stateSelected, setStateSelected] = useState<string>("");
  const [cultures, setCultures] = useState<string[]>([]);
  const [error, setError] = useState({ state: "", cultures: "" });

  const { idfarm: idFarm } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const farms = useSelector<IState, IFarm[]>((state) => state.farms.items);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>({
    resolver: yupResolver(ValidationsSchema),
  });

  useEffect(() => {
    (async () => {
      const result: { data: ResponseStatesReq[] } = await axios.get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
      );

      const formattedStates = result?.data.map((item: ResponseStatesReq) => {
        return { value: item.nome, label: item.nome };
      });

      setStates(formattedStates);
    })();

    if (idFarm === undefined) return;

    const data: any = farms.find((item) => item.id === idFarm);

    reset({
      document: data.document,
      producerName: data.producerName,
      farmName: data.farmName,
      city: data.city,
      totalArea: data.totalArea,
      arableArea: data.arableArea,
      vegetationArea: data.vegetationArea,
    });

    setStateSelected(data.state);
    setCultures(data.cultures);

    return () => {
      reset({
        document: "",
        producerName: "",
        farmName: "",
        city: "",
        totalArea: 0,
        arableArea: 0,
        vegetationArea: 0,
      });
      setStateSelected("");
      setCultures([]);
    };
  }, [idFarm]);

  const validationsExtras = () => {
    if (stateSelected === "") {
      setError({ ...error, state: "É necessário selecionar um estado." });
      return;
    }

    if (cultures.length <= 0) {
      setError({
        ...error,
        cultures: "É necessário selecionar um ao menos 1 cultura",
      });
      return;
    }
  };

  const handleOnSave = (data: FormData) => {
    validationsExtras();

    if (idFarm !== undefined) {
      const payloadData = {
        id: idFarm,
        ...data,
        state: stateSelected,

        cultures: cultures,
      };

      dispatch(UpdateFarm(payloadData));

      swal({
        title: "Sucesso",
        text: "Atualizado atualizado!",
        icon: "success",
      });
    } else {
      const payloadData = {
        id: uuid(),
        ...data,
        state: stateSelected,
        cultures: cultures,
      };

      dispatch(SaveFarm(payloadData));
      swal({
        title: "Sucesso",
        text: "Cadastro realizado!",
        icon: "success",
      });
    }
    reset();
    setCultures([]);
    navigate("/farms");
    return;
  };

  const handleAddOrRemoveCultureItem = (item: string) => {
    if (cultures.includes(item)) {
      var index = cultures.indexOf(item);
      if (index !== -1) {
        cultures.splice(index, 1);
        setCultures((cultures) => [...cultures]);
        return;
      }
    }
    setCultures([...cultures, item]);
  };

  return (
    <Layout
      title={idFarm !== undefined ? "Editar Fazenda" : "Cadastrar Fazenda"}
    >
      <InputRHF
        label="CPF ou CNPJ"
        name="document"
        maskType={
          watch("document")?.replace(/[^0-9]+/g, "") === undefined ||
          watch("document")?.replace(/[^0-9]+/g, "").length <= 11
            ? "cpf"
            : "cnpj"
        }
        control={control}
        error={errors.document && errors.document?.message}
      />

      <InputRHF
        label="Nome do produtor"
        name="producerName"
        control={control}
        error={errors.producerName && errors.producerName?.message}
      />

      <InputRHF
        label="Nome da Fazenda"
        name="farmName"
        control={control}
        error={errors.farmName && errors.farmName?.message}
      />

      <Select
        data={states}
        label="Estado"
        value={stateSelected}
        onChange={(obj: StatesProps) => {
          setError({ ...error, state: "" });
          setStateSelected(obj.value);
        }}
        error={error.state}
      />

      <InputRHF
        label="Cidade"
        name="city"
        control={control}
        error={errors.city && errors.city?.message}
      />

      <InputRHF
        label="Area Total (em hectares)"
        name="totalArea"
        type="number"
        control={control}
        error={errors.totalArea && errors.totalArea?.message}
      />

      <InputRHF
        label="Área de agricultável (em hectares)"
        name="arableArea"
        type="number"
        control={control}
        error={errors.arableArea && errors.arableArea?.message}
      />

      <InputRHF
        label="Área de vegetação (em hectares)"
        name="vegetationArea"
        type="number"
        control={control}
        error={errors.vegetationArea && errors.vegetationArea?.message}
      />

      <h3>Culturas plantadas</h3>

      <ContainerCropsPlanted>
        <CropsPlantedChecks>
          {plantationOptions.map((item) => (
            <Checkbox
              key={item.id}
              label={item.label}
              selected={cultures.includes(item.id)}
              onClick={() => {
                setError({ ...error, cultures: "" });
                handleAddOrRemoveCultureItem(item.id);
              }}
            />
          ))}
        </CropsPlantedChecks>
        {error.cultures !== "" && <LabelError>{error.cultures}</LabelError>}
      </ContainerCropsPlanted>

      <Button label="salvar" onClick={handleSubmit(handleOnSave)} inline />
    </Layout>
  );
};

import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

import { Layout } from "../../components/Layout";
import { Button } from "../../components/Button";
import { Input, InputNumber, Radio, Select } from "../../components";

import { plantationOptions } from "../../Utils/plantationOptions";

import { ValidationsSchema } from "./validationForm";

import { SaveFarm, UpdateFarm } from "../../store/modules/farms/actions";
import { IState } from "../../store";
import { IFarm } from "../../store/modules/farms/types";

import { FormData, ResponseStatesReq, StatesProps, CitiesProps } from "./types";
import { Container } from "./style";

export const Register = () => {
  const [states, setStates] = useState<StatesProps[]>([]);
  const [cities, setCities] = useState<CitiesProps[]>([]);

  const { idfarm: idFarm } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const farms = useSelector<IState, IFarm[]>((state) => state.farms.items);

  const {
    control,
    handleSubmit,
    formState,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>({
    resolver: yupResolver(ValidationsSchema),
  });

  const stateField = watch("state");

  useEffect(() => {
    (async () => {
      const statesStorage = await localStorage.getItem("states");
      if (statesStorage === null) {
        const result: { data: ResponseStatesReq[] } = await axios.get(
          "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
        );

        const formattedStates = result?.data.map((item: ResponseStatesReq) => {
          return { value: String(item.id), label: item.nome };
        });

        setStates(formattedStates);

        await localStorage.setItem("states", JSON.stringify(formattedStates));
      } else {
        setStates(JSON.parse(statesStorage!));
      }
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
      cultures: data.cultures,
      state: data.state,
    });

    return () => {
      reset({
        document: "",
        producerName: "",
        farmName: "",
        city: "",
        totalArea: 0,
        arableArea: 0,
        vegetationArea: 0,
        cultures: [],
        state: "",
      });
    };
    // eslint-disable-next-line
  }, [idFarm]);

  useMemo(() => {
    if (stateField === undefined) return;

    (async () => {
      const result: { data: ResponseStatesReq[] } = await axios.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateField}/municipios`
      );

      const formattedCities = result?.data.map((item: ResponseStatesReq) => {
        return { value: String(item.id), label: item.nome };
      });

      setCities(formattedCities);
    })();
  }, [stateField]);

  const handleOnSave = (data: FormData) => {
    if (idFarm !== undefined) {
      const payloadData = {
        id: idFarm,
        ...data,
        cultures: data.cultures.filter(
          (item: any) => item !== null && item !== undefined
        ),
      };

      dispatch(UpdateFarm(payloadData));

      swal({
        title: "Success",
        text: "Atualizado atualizado!",
        icon: "success",
      });
    } else {
      const payloadData = {
        id: uuid(),
        ...data,
        cultures: data.cultures.filter(
          (item: any) => item !== null && item !== undefined
        ),
      };

      dispatch(SaveFarm(payloadData));
      swal({
        title: "Sucesso",
        text: "Cadastro realizado!",
        icon: "success",
      });
    }
    reset();
    navigate("/farms");
    return;
  };

  return (
    <Layout
      title={idFarm !== undefined ? "Editar Fazenda" : "Cadastrar Fazenda"}
    >
      <Container>
        <Input
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

        <Input
          label="Nome do produtor"
          name="producerName"
          control={control}
          error={errors.producerName && errors.producerName?.message}
        />

        <Input
          label="Nome da Fazenda"
          name="farmName"
          control={control}
          error={errors.farmName && errors.farmName?.message}
        />

        {states.length === 0 ? (
          "carregado estados"
        ) : (
          <Select
            label="Estado"
            options={states}
            name="state"
            control={control}
            error={errors.state && errors.state?.message}
          />
        )}

        <Select
          label="Cidade"
          options={cities}
          name="city"
          control={control}
          error={errors.city && errors.city?.message}
        />

        <InputNumber
          label="Area Total (em hectares)"
          name="totalArea"
          type="number"
          control={control}
          error={errors.totalArea && errors.totalArea?.message}
        />

        <InputNumber
          label="Área de agricultável (em hectares)"
          name="arableArea"
          type="number"
          control={control}
          error={errors.arableArea && errors.arableArea?.message}
        />

        <InputNumber
          label="Área de vegetação (em hectares)"
          name="vegetationArea"
          type="number"
          control={control}
          error={errors.vegetationArea && errors.vegetationArea?.message}
        />

        <Radio
          name="cultures"
          label="Culturas plantadas"
          options={plantationOptions}
          control={control}
          error={errors.cultures && errors.cultures?.message}
        />
      </Container>

      <Button
        label="salvar"
        onClick={handleSubmit(handleOnSave)}
        inline
        disabled={Object.keys(formState.dirtyFields).length < 9}
      />
    </Layout>
  );
};

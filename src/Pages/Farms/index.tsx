import React from "react";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useTheme } from "styled-components";
import { useDispatch } from "react-redux";

import { Layout } from "../../components/Layout";
import { TableList } from "../../components/TableList";

import { IState } from "../../store";
import { IFarm } from "../../store/modules/farms/types";
import { ButtonAction } from "../../components/ButtonAction";
import { RemoveFarm } from "../../store/modules/farms/actions";
import { Link } from "react-router-dom";

export const Farms = () => {
  const farms = useSelector<IState, IFarm[]>((state) => state.farms.items);
  const theme = useTheme();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const configTable = [
    { label: "id", path: "id", size: 33 },
    { label: "Nome da Fazenda", path: "farmName", size: 33 },
    { label: "Estado", path: "state", size: 10 },
    { label: "AreaTotal", path: "totalArea", size: 33 },
    {
      label: "Ações",
      path: (data: IFarm) => (
        <>
          <ButtonAction
            onClick={() => {
              swal({
                title: "Deseja mesmo remover?",
                icon: "warning",
                dangerMode: true,
                buttons: ["Não", "Sim"],
              }).then((willDelete) => {
                if (willDelete) {
                  dispatch(RemoveFarm(data.id));
                }
              });
            }}
          >
            <AiOutlineDelete color={theme.colors.background} />
          </ButtonAction>

          <ButtonAction onClick={() => navigate(`/edit/${data.id}`)}>
            <AiOutlineEdit color={theme.colors.background} />
          </ButtonAction>
        </>
      ),
      size: 33,
    },
  ];

  return (
    <Layout title="Fazendas Cadastradas">
      {farms.length === 0 ? (
        <>
          <p>Sem dados</p>

          <Link to="/edit">Cadastrar primeira fazenda</Link>
        </>
      ) : (
        <TableList data={farms} config={configTable} />
      )}
    </Layout>
  );
};

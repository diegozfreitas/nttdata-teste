import React from "react";

import { Layout } from "../../components/Layout";
import { Cards } from "./components/Cards";
import { Graphics } from "./components/Graphics";

import {} from "./style";

export const Dashboard = () => {
  return (
    <Layout title="Início">
      <Cards />

      <Graphics />
    </Layout>
  );
};

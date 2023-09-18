import React, { useEffect } from "react";
import Main from "../../components/Main/Main";
import LayoutDefault from "../../components/Layout/LayoutDefault";
import { get } from "../../service/api";

const HomePage: React.FC = () => {
  return (
    <LayoutDefault>
      <Main />
    </LayoutDefault>
  );
};

export default HomePage;

import React from "react";
import { AppContainer, PageContainer } from "./styles";

const Layout = (props) => {
  return (
    <AppContainer>
      <PageContainer className="page-container">{props.children}</PageContainer>
    </AppContainer>
  );
};

export default Layout;

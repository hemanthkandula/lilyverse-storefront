import { useAuth } from "@saleor/sdk";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import { DemoBanner, Loader } from "@components/atoms";
import { demoMode } from "@temp/constants";

import {
  Footer,
  MainMenu,
  MetaConsumer,
  OverlayManager,
  OverlayProvider,
} from "../components";
import ShopProvider from "../components/ShopProvider";
import Notifications from "./Notifications";
import { Routes } from "./routes";

import "./App.css";
import "../globalStyles/scss/index.scss";

const App: React.FC = () => {
  const { tokenRefreshing, tokenVerifying } = useAuth();

  if (tokenRefreshing || tokenVerifying) {
    return <Loader />;
  }

  return (
    <ShopProvider>
      <OverlayProvider>
        <MetaConsumer />
        {/* {demoMode && <DemoBanner />} */}
        <header>
          <MainMenu />
        </header>
        <ParallaxProvider>
          <Routes />
        </ParallaxProvider>
        <Footer />
        <OverlayManager />
        <Notifications />
      </OverlayProvider>
    </ShopProvider>
  );
};

export default App;

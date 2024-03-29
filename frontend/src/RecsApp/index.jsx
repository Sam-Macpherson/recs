import styled from "styled-components";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { QueryClientProvider } from "api";
import {ColorPalette, FontColors} from "../../StylingConstants";
import Navigation from "./Navigation";
import BrowseView from "./BrowseView";
import RateView from "./RateView";
import FriendsView from "./FriendsView";
import GroupsView from "./GroupsView";
import LoginView from "./LoginView";
import {useEffect, useState} from "react";
import {getUser} from "../api/authenticate";
import LogoutView from "./LogoutView";
import RecommendationProfile from "./RecProfile";

const Layout = styled.div`
  background-color: ${ColorPalette.GRAY};
  ${FontColors.WHITE}
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 16px 16px 16px 34px;
  overflow-y: auto;
`;

const RecsApp = () => (
  <QueryClientProvider>
    <BrowserRouter>
      <Layout>
        <Navigation />
        <StyledMain>
          <Routes path="/">
            <Route index element={<Navigate to="browse/" replace />} />
            <Route path="login/" element={<LoginView />} />
            <Route path="logout/" element={<LogoutView />} />
            <Route path="browse/" element={<BrowseView />} />
            <Route path="rate/" element={<RateView />} />
            <Route path="friends/" element={<FriendsView />} />
            <Route path="groups/" element={<GroupsView />} />
            <Route path="r/:id/" element={<RecommendationProfile />} />
          </Routes>
        </StyledMain>
      </Layout>
    </BrowserRouter>
  </QueryClientProvider>
);

export default RecsApp;

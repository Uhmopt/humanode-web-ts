import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import HtmlContainer from "./HtmlContainer";

interface Props {
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  background?: string;
}
const Layout: React.FC<Props> = ({
  maxWidth = "md",
}) => {
  const location = useLocation();
  const [crrState, setCrrState] = useState({
    background: "head-top",
    showHome: false,
    title: "HOME"
  });
  const init: (path: string) => void = (path) => {
    switch (path) {
      case "/home":
        setCrrState((prev) => ({
          ...(prev ?? {}),
          background: "head-top",
          showHome: false
        }))
        break;
      case "/path":
        setCrrState((prev) => ({
          ...(prev ?? {}),
          background: "head-eye rect-03",
          showHome: true,
          title: "PATH"
        }))
        break;
      case "/path/detail":
        setCrrState((prev) => ({
          ...(prev ?? {}),
          background: "head-eye rect-03",
          showHome: true,
          title: "PATH IN DETAIL"
        }))
        break;
      case "/paper":
        setCrrState((prev) => ({
          ...(prev ?? {}),
          background: "head-eye rect-01",
          showHome: true,
          title: "PAPER"
        }))
        break;
      case "/network":
        setCrrState((prev) => ({
          ...(prev ?? {}),
          background: "head-eye",
          showHome: true,
          title: "NETWORK"
        }))
        break;
      case "/testnet":
        setCrrState((prev) => ({
          ...(prev ?? {}),
          background: "head-eye rect-03",
          showHome: true,
          title: "Home"
        }))
        break;
      case "/chart":
        setCrrState((prev) => ({
          ...(prev ?? {}),
          background: "head-eye rect-03",
          showHome: true,
          title: "CHART"
        }))
        break;
      default:
        break;
    }
  }
  useEffect(() => {
    init(location?.pathname ?? "")
  }, [location])
  return (
    <HtmlContainer background={crrState?.background ?? ""} showHome={crrState?.showHome ?? false}>
      <Header />
      <Body>
        <Container maxWidth={maxWidth} className="pt-44 pb-36">
          <Outlet />
        </Container>
      </Body>
      <Footer isDisplay={crrState?.showHome ?? false} title={crrState?.title ?? ""} />
    </HtmlContainer>
  );
}
export default Layout
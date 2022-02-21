import CssBaseline from '@mui/material/CssBaseline';
import 'aos/dist/aos.css';
import React from "react";
import Routes from "./routes";
import "./styles/index.scss";
import "./styles/tailwind.css";
import AOS from 'aos';

export default function App() {
  AOS.init();
  return (
    <>
      <CssBaseline />
      <Routes />
    </>
  )
}

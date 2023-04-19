import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/index";
import Banner from "./components/Banner";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Banner />
      <Routes>
        <Route to='/'/>
      </Routes>
    </BrowserRouter>
  );
}

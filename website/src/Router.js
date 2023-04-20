import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/index";
import Banner from "./components/Banner";
import HomePage from './pages/HomePage/index'
import Footer from "./components/Footer";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Banner />
      <Routes>
        <Route path='/' element={<HomePage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

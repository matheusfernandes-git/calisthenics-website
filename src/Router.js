import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/index";
import Banner from "./components/Banner";
import HomePage from './pages/HomePage/index'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Banner />
      <Routes>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import CategoriesBar from "../components/common/CategoriesBar";

function MainLayout() {
  return (
    <>
      <Header />
      <CategoriesBar />
      <div className="container mt-3">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
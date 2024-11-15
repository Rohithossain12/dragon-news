import Header from "../components/header/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import RightNav from "../components/layout-components/RightNav";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-5">
        <Navbar></Navbar>
      </nav>

      <main className="w-11/12 mx-auto pt-5 gap-4 grid md:grid-cols-12">
        <aside className=" col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
          
        </section>
        <aside className="right col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;

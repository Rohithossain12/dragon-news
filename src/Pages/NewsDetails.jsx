import { useLoaderData } from "react-router-dom";
import Header from "../components/header/Header";
import RightNav from "../components/layout-components/RightNav";

const NewsDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9"></section>
        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;

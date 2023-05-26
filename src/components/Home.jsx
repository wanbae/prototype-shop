import Header from "./Header";
import Prototypes from "./Prototypes";
import Orders from "./Orders";
import Footer from "./Footer";
export default function Home() {
  return (
    <div className="container">
      <Header />
      <Prototypes />
      <Orders />
      <Footer />
    </div>
  );
}

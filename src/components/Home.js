import "bootstrap/dist/css/bootstrap.css";
import NavbarApp from "./NavBarApp/index";
import Slider from "./CarouselApp/carousel";
import Cards from "./Cards/Cards";
import Texto from "./Texto/Texto";
import Footer from "./Footer/Footer";
import img1 from "../assets/img/Uncharted2.jpg";

function Home() {
  return (
    <div className="Home">
      <NavbarApp />

      <Slider />

      <Texto />

      <Cards titulo="Uncharted 4 A Thief's End" texto="  La traición de Drake. 
            El retirado cazafortunas Nathan Drake vive felizmente su vida junto con su esposa Elena Fisher, 
            pero todo se derrumba cuando aparece su hermano Sam, el que Nathan pensaba que estaba muerto.
             Sam necesita su ayuda para desenmascarar una conspiración histórica del famoso pirata aventurero Henry Avery y su legendario tesoro. 
" src={img1} />

      <Footer />
    </div>
  );
}

export default Home;

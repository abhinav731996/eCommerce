import { Carousel } from "react-bootstrap";
import ProductCard from "../../components/common/ProductCard";

import image1 from "../../assets/images/template-1.jpg";
import image2 from "../../assets/images/template-2.jpg";

function Home() {

  return (

    <div>

      {/* HERO SLIDER */}

      <Carousel className="mb-5 ">

        <Carousel.Item>

          <img
            className="d-block w-100"
            src={image1}
            alt="Slide 1"
          />

        </Carousel.Item>

        <Carousel.Item>

          <img
            className="d-block w-100"
            src={image2}
            alt="Slide 2"
          />

        </Carousel.Item>

      </Carousel>


      {/* BEST SELLERS */}

      <h2 className="mb-4">Best Sellers</h2>

      <div className="row">

        <div className="col-md-3">
          <ProductCard />
        </div>

        <div className="col-md-3">
          <ProductCard />
        </div>

        <div className="col-md-3">
          <ProductCard />
        </div>

        <div className="col-md-3">
          <ProductCard />
        </div>

      </div>

    </div>

  );
}

export default Home;
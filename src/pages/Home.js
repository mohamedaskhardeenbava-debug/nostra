import { Container, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import allProducts from "../data/products";

const categories = ["Shoes", "Sunglasses", "Shirts", "Pants", "Suits"];

const Home = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 text-primary">Welcome to Nostra</h2>
      <p className="text-center lead mb-5">
        Explore our highlighted products by category 🚀
      </p>

      {categories.map((category) => {
        const categoryProducts = allProducts.filter(
          (p) => p.category === category
        );

        return (
          <div key={category} className="mb-5">
            <h3 className="text-dark mb-3">{category}</h3>
            <Carousel interval={4000} indicators={false} >
              {categoryProducts.map((product) => (
                <Carousel.Item key={product.id}>
                  <Link
                    to={`/products?category=${product.category}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <img
                      className="d-block w-100 rounded shadow"
                      src={product.img}
                      alt={product.name}
                      style={{ maxHeight: "500px"}}
                    />
                    <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-2">
                      <h5>{product.name}</h5>
                      <p>${product.price}</p>
                    </Carousel.Caption>
                  </Link>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        );
      })}
    </Container>
  );
};

export default Home;

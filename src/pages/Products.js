import { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useCart } from "../context/CartContext";

import RunningShoe from "../images/running-shoe.jpg";
import FormalShoe from "../images/formal-shoe.jpg";
import CasualShoe from "../images/casual-shoe.jpg";
import AviatorSunglasses from "../images/aviator.jpg";
import SportsSunglasses from "../images/sports-sunglasses.jpg";
import CasualShirt from "../images/casual.jpg";
import FormalShirt from "../images/formal.jpg";
import CheckedShirt from "../images/checked.jpg";
import TShirt from "../images/tshirt.jpg";
import FormalPants from "../images/fromal-pant.jpg";
import Jeans from "../images/jeans.jpg";
import Joggers from "../images/joggers.jpg";
import BusinessSuit from "../images/suit.jpg";
import WeddingSuit from "../images/wedding.jpg";

const allProducts = [
  { id: 1, name: "Running Shoes", category: "Shoes", price: 120, img: RunningShoe, },
  { id: 2, name: "Formal Shoes", category: "Shoes", price: 150, img: FormalShoe },
  { id: 3, name: "Casual Shoes", category: "Shoes", price: 130, img: CasualShoe },
  { id: 4, name: "Aviator Sunglasses", category: "Sunglasses", price: 80, img: AviatorSunglasses },
  { id: 5, name: "Sports Sunglasses", category: "Sunglasses", price: 90, img: SportsSunglasses },
  { id: 6, name: "Casual Shirt", category: "Shirts", price: 60, img: CasualShirt },
  { id: 7, name: "Formal Shirt", category: "Shirts", price: 80, img: FormalShirt },
  { id: 8, name: "Checked Shirt", category: "Shirts", price: 70, img: CheckedShirt },
  { id: 9, name: "T-Shirt", category: "Shirts", price: 40, img: TShirt },
  { id: 10, name: "Formal Pants", category: "Pants", price: 90, img:  FormalPants },
  { id: 11, name: "Jeans", category: "Pants", price: 70, img: Jeans  },
  { id: 12, name: "Joggers", category: "Pants", price: 60, img:  Joggers },
  { id: 13, name: "Business Suit", category: "Suits", price: 200, img:  BusinessSuit },
  { id: 14, name: "Wedding Suit", category: "Suits", price: 180, img: WeddingSuit  },
];

const Products = () => {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const { addToCart } = useCart();

  const filteredProducts = allProducts.filter((product) => {
    return (
      (category === "All" || product.category === category) &&
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 text-primary">Our Products</h2>

      {/* Filters */}
      <Row className="mb-4">
        <Col md={6} className="mb-2">
          <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="All">All Categories</option>
            <option value="Shoes">Shoes</option>
            <option value="Sunglasses">Sunglasses</option>
            <option value="Shirts">Shirts</option>
            <option value="Pants">Pants</option>
            <option value="Suits">Suits</option>
          </Form.Select>
        </Col>
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
      </Row>

      {/* Products Grid */}
      <Row>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Col key={product.id} md={4} sm={6} className="mb-4 col-12 col-md-4 col-lg-6">
              <Card className="h-100 shadow-sm border-0 hover-zoom card-custom">
                <Card.Img variant="top" src={product.img} style={{ width: "100%", height: "300px", objectFit: "cover" }}/>
                <Card.Body className="text-center">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="text-muted">{product.category}</Card.Text>
                  <Card.Text className="fw-bold text-success">${product.price}</Card.Text>
                  <Button className="btn-custom" variant="primary" onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center text-danger">No products found.</p>
        )}
      </Row>
    </Container>
  );
};

export default Products;

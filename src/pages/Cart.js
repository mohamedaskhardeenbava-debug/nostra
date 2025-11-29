import { Container, Table, Button } from "react-bootstrap";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty, emptyCart, getTotal } = useCart();

  return (
    <Container className="py-5">
      <h2 className="text-center text-success mb-4">Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <p className="text-center text-danger">Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.img} alt={item.name} width="50" className="me-2" />
                    {item.name}
                  </td>
                  <td>{item.category}</td>
                  <td>${item.price}</td>
                  <td>
                    <Button variant="secondary" size="sm" onClick={() => decreaseQty(item.id)}>-</Button>{" "}
                    {item.quantity}{" "}
                    <Button variant="secondary" size="sm" onClick={() => increaseQty(item.id)}>+</Button>
                  </td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <h4>Total: ${getTotal()}</h4>
            <div>
              <Button variant="outline-danger" className="me-2" onClick={emptyCart}>
                Empty Cart
              </Button>
              <Button
                variant="success"
                onClick={() => {
                  alert("Purchase successful 🎉");
                  emptyCart();
                }}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
